import { TestBed,async, inject} from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PalinService } from './palin.service';



describe('PalinService', () => {
  let service, http, backend;
    beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ PalinService ]
    });
    beforeEach(inject([PalinService, HttpClient, HttpTestingController], (
    conf: PalinService,
    _h: HttpClient,
    _b: HttpTestingController
) => {
    service = conf;
    http = _h;
    backend = _b;
}));
afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
 
    httpMock.verify();
         
 }));
     
});

  it('should be created', () => {
    const service: PalinService = TestBed.get(PalinService);
    expect(service).toBeTruthy();
  });


  it('should getPalin', () => {
 
    service.getPalin().subscribe(res => {
     
        expect(res).toBe('pan');
             
    });
 
    const req = backend.expectOne({
        url: '/url',
        method: 'GET'
    });
 
    req.flush('pan', { status: 200, statusText: 'ok' });
 
});
});

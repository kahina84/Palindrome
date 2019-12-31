import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Palindrome app is running!');
  });

  it('isPalindromeNOT', () => {
    let a ={"id":1 , "label":"toto"}
    const result = AppComponent.isPalindrome(a);
    expect(result).toBe(false);
  });

  it('isPalindromeOK', () => {
    let a ={"id":1 , "label":"tot"}
    const result = AppComponent.isPalindrome(a);
    expect(result).toBe(true);
  });

  it('isPalindromeAvecEspace', () => {
    let a ={"id":1 , "label":"tot "}
    const result = AppComponent.isPalindrome(a);
    expect(result).toBe(false);
  });

  it('isPalindromeAvecChiffre', () => {
    let a ={"id":1 , "label":"tot12321tot"}
    const result = AppComponent.isPalindrome(a);
    expect(result).toBe(true);
  });



});



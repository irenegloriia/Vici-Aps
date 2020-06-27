import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewmeetPage } from './newmeet.page';

describe('NewmeetPage', () => {
  let component: NewmeetPage;
  let fixture: ComponentFixture<NewmeetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmeetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewmeetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

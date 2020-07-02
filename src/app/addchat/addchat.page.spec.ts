import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddchatPage } from './addchat.page';

describe('AddchatPage', () => {
  let component: AddchatPage;
  let fixture: ComponentFixture<AddchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddchatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtsistaComponent } from './artsista.component';

describe('ArtsistaComponent', () => {
    let component: ArtsistaComponent;
    let fixture: ComponentFixture<ArtsistaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ArtsistaComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ArtsistaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

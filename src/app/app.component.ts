import { Component } from '@angular/core';
import { ClrFormLayouts } from '@ng-holistic/clr-forms';
import { TextMask } from '@ng-holistic/clr-controls';
import { map } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';

export const definition: ClrFormLayouts.ClrFormLayout = {
    kind: 'tabs',
    $content: [
        {
            kind: 'tab',
            title: 'Personal Info',
            $content: [
                {
                    kind: 'group',
                    title: 'Person Name',
                    $content: [
                        {
                            kind: 'fields',
                            fields: [
                                {
                                    kind: 'TextField',
                                    id: 'firstName',
                                    label: 'First Name'
                                },
                                {
                                    kind: 'TextField',
                                    id: 'lastName',
                                    label: 'Last Name'
                                }
                            ]
                        }
                    ]
                },
                {
                    kind: 'group',
                    title: 'Family',
                    $content: [
                        {
                            kind: 'fields',
                            fields: [
                                {
                                    kind: 'SelectField',
                                    id: 'maritalStatus',
                                    props: {
                                        label: 'Marital Status',
                                        items: [
                                            { key: 'single', label: 'Single' },
                                            { key: 'married', label: 'Married' }
                                        ]
                                    }
                                },
                                {
                                    kind: 'SelectField',
                                    id: 'childrenNumber',
                                    props: {
                                        label: 'Children Number',
                                        items: [
                                            { key: '1', label: '1' },
                                            { key: '2', label: '2' },
                                            { key: '3', label: '3' },
                                            { key: '3+', label: '3+' }
                                        ]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            kind: 'tab',
            title: 'Address',
            $content: [
                {
                    kind: 'fields',
                    fields: [
                        {
                            kind: 'TextField',
                            id: 'country',
                            label: 'Country',
                            validators: [Validators.required]
                        },
                        {
                            kind: 'TextField',
                            id: 'city',
                            label: 'City'
                        },
                        {
                            kind: 'TextField',
                            id: 'street',
                            label: 'Street'
                        }
                    ]
                }
            ]
        }
    ]
};

@Component({
  selector: 'my-app',
  template: `
    <hlc-clr-aside-panel *ngIf="isOpen" (close)="isOpen = false">
      <hlc-clr-form content [definition]="definition"></hlc-clr-form>
    </hlc-clr-aside-panel>
    <button class="btn" (click)="isOpen = true">Show Aside</button>
`
})
export class AppComponent {
    isOpen = false;
    definition = definition;

}

import DataBinding from '@/views/databinding/DataBinding.vue'
import DataBindingHtml from '@/views/databinding/DataBindingHtml.vue'
import DataBindingInputText from '@/views/databinding/DataBindingInputText.vue'
import DataBindingInputNumber from '@/views/databinding/DataBindingInputNumber.vue'
import DataBindingTextarea from '@/views/databinding/DataBindingTextarea.vue'
import DataBindingSelect from '@/views/databinding/DataBindingSelect.vue'
import DataBindingCheckBox from '@/views/databinding/DataBindingCheckBox.vue'
import DataBindingRadio from '@/views/databinding/DataBindingRadio.vue'
import DataBindingAttribute from '@/views/databinding/DataBindingAttribute.vue'
import DataBindingButton from '@/views/databinding/DataBindingButton.vue'
import DataBindingClass from '@/views/databinding/DataBindingClass.vue'
import DataBindingClass2 from '@/views/databinding//DataBindingClass2.vue'
import DataBindingStyle from '@/views/databinding/DataBindingStyle.vue'
import DataBindingStyle2 from '@/views/databinding/DataBindingStyle2.vue'
import DataBindingList from '@/views/databinding/DataBindingList.vue'
import DataBindingList2 from '@/views/databinding/DataBindingList2.vue'
import RenderingVIf from '@/views/databinding/RenderingVIf.vue'
import EventClick from '@/views/databinding/EventClick.vue'
import EventChange from '@/views/databinding/EventChange.vue'
import Watch from '@/views/databinding/Watch.vue'

export default {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding,
    children: [
        {
            path: 'databindinghtml',
            component: DataBindingHtml
        }, {
            path: 'databindinginputtext',
            component: DataBindingInputText
        }, {
            path: 'databindinginputnumber',
            component: DataBindingInputNumber
        }, {
            path: 'databindingtextarea',
            component: DataBindingTextarea
        }, {
            path: 'databindingselect',
            component: DataBindingSelect
        }, {
            path: 'databindingcheckbox',
            component: DataBindingCheckBox
        }, {
            path: 'databindingradio',
            component: DataBindingRadio
        }, {
            path: 'databindingattribute',
            component: DataBindingAttribute
        }, {
            path: 'databindingbutton',
            component: DataBindingButton
        }, {
            path: 'databindingclass',
            component: DataBindingClass
        }, {
            path: 'databindingclass2',
            component: DataBindingClass2
        }, {
            path: 'databindingstyle',
            component: DataBindingStyle
        }, {
            path: 'databindingstyle2',
            component: DataBindingStyle2
        }, {
            path: 'databindinglist',
            component: DataBindingList
        }, {
            path: 'databindinglist2',
            component: DataBindingList2
        }, {
            path: 'renderingvif',
            component: RenderingVIf
        }, {
            path: 'eventclick',
            component: EventClick
        }, {
            path: 'eventchange',
            component: EventChange
        }, {
            path: 'watch',
            component: Watch
        }
    ]
}

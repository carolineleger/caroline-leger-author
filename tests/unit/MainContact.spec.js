import { shallowMount } from '@vue/test-utils';
import MainContact from '@/components/MainContact.vue';

describe('MainContact.vue', () => {
  it('renders the contact section with social links and copyright', () => {
    const wrapper = shallowMount(MainContact);

    expect(wrapper.find('#contact').exists()).toBe(true);
    expect(wrapper.text()).toContain('Contactez-moi sur:');
    expect(wrapper.text()).toContain('Copyright © 2021 Caroline Leger');
    expect(wrapper.findAll('a')).toHaveLength(4);
  });
});

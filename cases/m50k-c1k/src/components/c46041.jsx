import React from 'react';
const LABEL_46041 = 'component_46041';
export function Component46041({ value = 46041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46041, 'data-value': derived.doubled }, children);
}
export default Component46041;

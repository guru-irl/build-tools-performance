import React from 'react';
const LABEL_27862 = 'component_27862';
export function Component27862({ value = 27862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27862, 'data-value': derived.doubled }, children);
}
export default Component27862;

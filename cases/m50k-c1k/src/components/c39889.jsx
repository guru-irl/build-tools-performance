import React from 'react';
const LABEL_39889 = 'component_39889';
export function Component39889({ value = 39889, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39889, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39889, 'data-value': derived.doubled }, children);
}
export default Component39889;

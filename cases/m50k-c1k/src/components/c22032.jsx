import React from 'react';
const LABEL_22032 = 'component_22032';
export function Component22032({ value = 22032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22032, 'data-value': derived.doubled }, children);
}
export default Component22032;

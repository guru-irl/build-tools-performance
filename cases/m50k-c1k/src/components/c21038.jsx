import React from 'react';
const LABEL_21038 = 'component_21038';
export function Component21038({ value = 21038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21038, 'data-value': derived.doubled }, children);
}
export default Component21038;

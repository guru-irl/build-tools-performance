import React from 'react';
const LABEL_32038 = 'component_32038';
export function Component32038({ value = 32038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32038, 'data-value': derived.doubled }, children);
}
export default Component32038;

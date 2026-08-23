import React from 'react';
const LABEL_29038 = 'component_29038';
export function Component29038({ value = 29038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29038, 'data-value': derived.doubled }, children);
}
export default Component29038;

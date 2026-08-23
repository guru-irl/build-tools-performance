import React from 'react';
const LABEL_10038 = 'component_10038';
export function Component10038({ value = 10038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10038, 'data-value': derived.doubled }, children);
}
export default Component10038;

import React from 'react';
const LABEL_15038 = 'component_15038';
export function Component15038({ value = 15038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15038, 'data-value': derived.doubled }, children);
}
export default Component15038;

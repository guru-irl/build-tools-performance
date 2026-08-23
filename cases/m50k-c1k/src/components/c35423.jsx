import React from 'react';
const LABEL_35423 = 'component_35423';
export function Component35423({ value = 35423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35423, 'data-value': derived.doubled }, children);
}
export default Component35423;

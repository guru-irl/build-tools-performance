import React from 'react';
const LABEL_35454 = 'component_35454';
export function Component35454({ value = 35454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35454, 'data-value': derived.doubled }, children);
}
export default Component35454;

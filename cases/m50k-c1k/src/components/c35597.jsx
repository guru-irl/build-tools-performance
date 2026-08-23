import React from 'react';
const LABEL_35597 = 'component_35597';
export function Component35597({ value = 35597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35597, 'data-value': derived.doubled }, children);
}
export default Component35597;

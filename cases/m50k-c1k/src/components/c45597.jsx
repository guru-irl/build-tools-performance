import React from 'react';
const LABEL_45597 = 'component_45597';
export function Component45597({ value = 45597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45597, 'data-value': derived.doubled }, children);
}
export default Component45597;

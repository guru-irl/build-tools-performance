import React from 'react';
const LABEL_13351 = 'component_13351';
export function Component13351({ value = 13351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13351, 'data-value': derived.doubled }, children);
}
export default Component13351;

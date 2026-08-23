import React from 'react';
const LABEL_17062 = 'component_17062';
export function Component17062({ value = 17062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17062, 'data-value': derived.doubled }, children);
}
export default Component17062;

import React from 'react';
const LABEL_20389 = 'component_20389';
export function Component20389({ value = 20389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20389, 'data-value': derived.doubled }, children);
}
export default Component20389;

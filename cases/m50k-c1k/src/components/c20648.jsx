import React from 'react';
const LABEL_20648 = 'component_20648';
export function Component20648({ value = 20648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20648, 'data-value': derived.doubled }, children);
}
export default Component20648;

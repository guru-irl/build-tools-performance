import React from 'react';
const LABEL_20162 = 'component_20162';
export function Component20162({ value = 20162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20162, 'data-value': derived.doubled }, children);
}
export default Component20162;

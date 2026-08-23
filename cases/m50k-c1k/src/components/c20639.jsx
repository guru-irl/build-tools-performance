import React from 'react';
const LABEL_20639 = 'component_20639';
export function Component20639({ value = 20639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20639, 'data-value': derived.doubled }, children);
}
export default Component20639;

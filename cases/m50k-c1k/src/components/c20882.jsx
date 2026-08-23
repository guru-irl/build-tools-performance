import React from 'react';
const LABEL_20882 = 'component_20882';
export function Component20882({ value = 20882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20882, 'data-value': derived.doubled }, children);
}
export default Component20882;

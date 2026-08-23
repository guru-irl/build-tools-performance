import React from 'react';
const LABEL_20098 = 'component_20098';
export function Component20098({ value = 20098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20098, 'data-value': derived.doubled }, children);
}
export default Component20098;

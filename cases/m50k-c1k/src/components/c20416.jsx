import React from 'react';
const LABEL_20416 = 'component_20416';
export function Component20416({ value = 20416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20416, 'data-value': derived.doubled }, children);
}
export default Component20416;

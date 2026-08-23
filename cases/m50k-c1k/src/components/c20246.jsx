import React from 'react';
const LABEL_20246 = 'component_20246';
export function Component20246({ value = 20246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20246, 'data-value': derived.doubled }, children);
}
export default Component20246;

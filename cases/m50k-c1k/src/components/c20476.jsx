import React from 'react';
const LABEL_20476 = 'component_20476';
export function Component20476({ value = 20476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20476, 'data-value': derived.doubled }, children);
}
export default Component20476;

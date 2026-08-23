import React from 'react';
const LABEL_39647 = 'component_39647';
export function Component39647({ value = 39647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39647, 'data-value': derived.doubled }, children);
}
export default Component39647;

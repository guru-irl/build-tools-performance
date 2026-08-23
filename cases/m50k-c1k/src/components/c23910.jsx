import React from 'react';
const LABEL_23910 = 'component_23910';
export function Component23910({ value = 23910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23910, 'data-value': derived.doubled }, children);
}
export default Component23910;

import React from 'react';
const LABEL_24527 = 'component_24527';
export function Component24527({ value = 24527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24527, 'data-value': derived.doubled }, children);
}
export default Component24527;

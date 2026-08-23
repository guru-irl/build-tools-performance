import React from 'react';
const LABEL_20494 = 'component_20494';
export function Component20494({ value = 20494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20494, 'data-value': derived.doubled }, children);
}
export default Component20494;

import React from 'react';
const LABEL_5367 = 'component_5367';
export function Component5367({ value = 5367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5367, 'data-value': derived.doubled }, children);
}
export default Component5367;

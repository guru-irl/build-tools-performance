import React from 'react';
const LABEL_5526 = 'component_5526';
export function Component5526({ value = 5526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5526, 'data-value': derived.doubled }, children);
}
export default Component5526;

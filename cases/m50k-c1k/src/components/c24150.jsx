import React from 'react';
const LABEL_24150 = 'component_24150';
export function Component24150({ value = 24150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24150, 'data-value': derived.doubled }, children);
}
export default Component24150;

import React from 'react';
const LABEL_6599 = 'component_6599';
export function Component6599({ value = 6599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6599, 'data-value': derived.doubled }, children);
}
export default Component6599;

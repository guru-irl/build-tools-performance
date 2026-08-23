import React from 'react';
const LABEL_32864 = 'component_32864';
export function Component32864({ value = 32864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32864, 'data-value': derived.doubled }, children);
}
export default Component32864;

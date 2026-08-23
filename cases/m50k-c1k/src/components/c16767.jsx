import React from 'react';
const LABEL_16767 = 'component_16767';
export function Component16767({ value = 16767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16767, 'data-value': derived.doubled }, children);
}
export default Component16767;

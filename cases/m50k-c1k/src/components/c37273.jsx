import React from 'react';
const LABEL_37273 = 'component_37273';
export function Component37273({ value = 37273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37273, 'data-value': derived.doubled }, children);
}
export default Component37273;

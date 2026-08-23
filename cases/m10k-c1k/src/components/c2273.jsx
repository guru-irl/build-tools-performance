import React from 'react';
const LABEL_2273 = 'component_2273';
export function Component2273({ value = 2273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2273, 'data-value': derived.doubled }, children);
}
export default Component2273;

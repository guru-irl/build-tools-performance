import React from 'react';
const LABEL_7273 = 'component_7273';
export function Component7273({ value = 7273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7273, 'data-value': derived.doubled }, children);
}
export default Component7273;

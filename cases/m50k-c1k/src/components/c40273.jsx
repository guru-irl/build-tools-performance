import React from 'react';
const LABEL_40273 = 'component_40273';
export function Component40273({ value = 40273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40273, 'data-value': derived.doubled }, children);
}
export default Component40273;

import React from 'react';
const LABEL_38273 = 'component_38273';
export function Component38273({ value = 38273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38273, 'data-value': derived.doubled }, children);
}
export default Component38273;

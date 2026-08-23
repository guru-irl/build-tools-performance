import React from 'react';
const LABEL_41034 = 'component_41034';
export function Component41034({ value = 41034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41034, 'data-value': derived.doubled }, children);
}
export default Component41034;

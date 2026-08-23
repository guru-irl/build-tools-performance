import React from 'react';
const LABEL_41509 = 'component_41509';
export function Component41509({ value = 41509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41509, 'data-value': derived.doubled }, children);
}
export default Component41509;

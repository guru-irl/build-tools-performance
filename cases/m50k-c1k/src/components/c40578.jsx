import React from 'react';
const LABEL_40578 = 'component_40578';
export function Component40578({ value = 40578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40578, 'data-value': derived.doubled }, children);
}
export default Component40578;

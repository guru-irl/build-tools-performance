import React from 'react';
const LABEL_27643 = 'component_27643';
export function Component27643({ value = 27643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27643, 'data-value': derived.doubled }, children);
}
export default Component27643;

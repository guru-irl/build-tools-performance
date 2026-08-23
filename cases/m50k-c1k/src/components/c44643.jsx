import React from 'react';
const LABEL_44643 = 'component_44643';
export function Component44643({ value = 44643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44643, 'data-value': derived.doubled }, children);
}
export default Component44643;

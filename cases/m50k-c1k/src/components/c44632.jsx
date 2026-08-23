import React from 'react';
const LABEL_44632 = 'component_44632';
export function Component44632({ value = 44632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44632, 'data-value': derived.doubled }, children);
}
export default Component44632;

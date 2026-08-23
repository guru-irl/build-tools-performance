import React from 'react';
const LABEL_44767 = 'component_44767';
export function Component44767({ value = 44767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44767, 'data-value': derived.doubled }, children);
}
export default Component44767;

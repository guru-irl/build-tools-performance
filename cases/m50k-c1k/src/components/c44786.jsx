import React from 'react';
const LABEL_44786 = 'component_44786';
export function Component44786({ value = 44786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44786, 'data-value': derived.doubled }, children);
}
export default Component44786;

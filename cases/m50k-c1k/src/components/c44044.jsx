import React from 'react';
const LABEL_44044 = 'component_44044';
export function Component44044({ value = 44044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44044, 'data-value': derived.doubled }, children);
}
export default Component44044;

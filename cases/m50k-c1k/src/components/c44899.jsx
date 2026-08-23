import React from 'react';
const LABEL_44899 = 'component_44899';
export function Component44899({ value = 44899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44899, 'data-value': derived.doubled }, children);
}
export default Component44899;

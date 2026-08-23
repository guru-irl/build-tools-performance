import React from 'react';
const LABEL_44413 = 'component_44413';
export function Component44413({ value = 44413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44413, 'data-value': derived.doubled }, children);
}
export default Component44413;

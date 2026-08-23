import React from 'react';
const LABEL_41868 = 'component_41868';
export function Component41868({ value = 41868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41868, 'data-value': derived.doubled }, children);
}
export default Component41868;

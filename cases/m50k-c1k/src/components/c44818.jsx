import React from 'react';
const LABEL_44818 = 'component_44818';
export function Component44818({ value = 44818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44818, 'data-value': derived.doubled }, children);
}
export default Component44818;

import React from 'react';
const LABEL_44720 = 'component_44720';
export function Component44720({ value = 44720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44720, 'data-value': derived.doubled }, children);
}
export default Component44720;

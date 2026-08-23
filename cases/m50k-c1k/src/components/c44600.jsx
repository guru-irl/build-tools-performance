import React from 'react';
const LABEL_44600 = 'component_44600';
export function Component44600({ value = 44600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44600, 'data-value': derived.doubled }, children);
}
export default Component44600;

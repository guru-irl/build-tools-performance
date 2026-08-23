import React from 'react';
const LABEL_44247 = 'component_44247';
export function Component44247({ value = 44247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44247, 'data-value': derived.doubled }, children);
}
export default Component44247;

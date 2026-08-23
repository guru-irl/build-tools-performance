import React from 'react';
const LABEL_44997 = 'component_44997';
export function Component44997({ value = 44997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44997, 'data-value': derived.doubled }, children);
}
export default Component44997;

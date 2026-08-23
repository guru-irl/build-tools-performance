import React from 'react';
const LABEL_44877 = 'component_44877';
export function Component44877({ value = 44877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44877, 'data-value': derived.doubled }, children);
}
export default Component44877;

import React from 'react';
const LABEL_44870 = 'component_44870';
export function Component44870({ value = 44870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44870, 'data-value': derived.doubled }, children);
}
export default Component44870;

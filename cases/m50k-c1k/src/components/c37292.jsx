import React from 'react';
const LABEL_37292 = 'component_37292';
export function Component37292({ value = 37292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37292, 'data-value': derived.doubled }, children);
}
export default Component37292;

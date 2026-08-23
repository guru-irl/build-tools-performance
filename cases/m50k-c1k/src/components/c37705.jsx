import React from 'react';
const LABEL_37705 = 'component_37705';
export function Component37705({ value = 37705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37705, 'data-value': derived.doubled }, children);
}
export default Component37705;

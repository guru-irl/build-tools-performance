import React from 'react';
const LABEL_36705 = 'component_36705';
export function Component36705({ value = 36705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36705, 'data-value': derived.doubled }, children);
}
export default Component36705;

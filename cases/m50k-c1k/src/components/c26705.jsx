import React from 'react';
const LABEL_26705 = 'component_26705';
export function Component26705({ value = 26705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26705, 'data-value': derived.doubled }, children);
}
export default Component26705;

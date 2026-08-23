import React from 'react';
const LABEL_29705 = 'component_29705';
export function Component29705({ value = 29705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29705, 'data-value': derived.doubled }, children);
}
export default Component29705;

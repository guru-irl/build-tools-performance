import React from 'react';
const LABEL_13429 = 'component_13429';
export function Component13429({ value = 13429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13429, 'data-value': derived.doubled }, children);
}
export default Component13429;

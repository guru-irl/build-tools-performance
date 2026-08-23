import React from 'react';
const LABEL_15429 = 'component_15429';
export function Component15429({ value = 15429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15429, 'data-value': derived.doubled }, children);
}
export default Component15429;

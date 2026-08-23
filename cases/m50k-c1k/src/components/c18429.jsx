import React from 'react';
const LABEL_18429 = 'component_18429';
export function Component18429({ value = 18429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18429, 'data-value': derived.doubled }, children);
}
export default Component18429;

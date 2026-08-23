import React from 'react';
const LABEL_20325 = 'component_20325';
export function Component20325({ value = 20325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20325, 'data-value': derived.doubled }, children);
}
export default Component20325;

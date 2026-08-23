import React from 'react';
const LABEL_13299 = 'component_13299';
export function Component13299({ value = 13299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13299, 'data-value': derived.doubled }, children);
}
export default Component13299;

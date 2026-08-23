import React from 'react';
const LABEL_39299 = 'component_39299';
export function Component39299({ value = 39299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39299, 'data-value': derived.doubled }, children);
}
export default Component39299;

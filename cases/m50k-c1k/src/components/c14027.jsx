import React from 'react';
const LABEL_14027 = 'component_14027';
export function Component14027({ value = 14027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14027, 'data-value': derived.doubled }, children);
}
export default Component14027;

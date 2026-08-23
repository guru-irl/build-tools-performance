import React from 'react';
const LABEL_36027 = 'component_36027';
export function Component36027({ value = 36027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36027, 'data-value': derived.doubled }, children);
}
export default Component36027;

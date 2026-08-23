import React from 'react';
const LABEL_10027 = 'component_10027';
export function Component10027({ value = 10027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10027, 'data-value': derived.doubled }, children);
}
export default Component10027;

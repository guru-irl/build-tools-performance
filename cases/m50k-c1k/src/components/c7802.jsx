import React from 'react';
const LABEL_7802 = 'component_7802';
export function Component7802({ value = 7802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7802, 'data-value': derived.doubled }, children);
}
export default Component7802;

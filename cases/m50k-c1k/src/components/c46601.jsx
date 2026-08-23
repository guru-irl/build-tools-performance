import React from 'react';
const LABEL_46601 = 'component_46601';
export function Component46601({ value = 46601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46601, 'data-value': derived.doubled }, children);
}
export default Component46601;

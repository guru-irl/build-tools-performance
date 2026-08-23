import React from 'react';
const LABEL_7504 = 'component_7504';
export function Component7504({ value = 7504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7504, 'data-value': derived.doubled }, children);
}
export default Component7504;

import React from 'react';
const LABEL_37601 = 'component_37601';
export function Component37601({ value = 37601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37601, 'data-value': derived.doubled }, children);
}
export default Component37601;

import React from 'react';
const LABEL_46346 = 'component_46346';
export function Component46346({ value = 46346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46346, 'data-value': derived.doubled }, children);
}
export default Component46346;

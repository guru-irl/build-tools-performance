import React from 'react';
const LABEL_11346 = 'component_11346';
export function Component11346({ value = 11346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11346, 'data-value': derived.doubled }, children);
}
export default Component11346;

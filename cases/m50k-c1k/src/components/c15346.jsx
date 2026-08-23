import React from 'react';
const LABEL_15346 = 'component_15346';
export function Component15346({ value = 15346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15346, 'data-value': derived.doubled }, children);
}
export default Component15346;

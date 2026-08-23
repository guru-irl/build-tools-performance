import React from 'react';
const LABEL_12346 = 'component_12346';
export function Component12346({ value = 12346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12346, 'data-value': derived.doubled }, children);
}
export default Component12346;

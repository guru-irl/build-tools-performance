import React from 'react';
const LABEL_41346 = 'component_41346';
export function Component41346({ value = 41346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41346, 'data-value': derived.doubled }, children);
}
export default Component41346;

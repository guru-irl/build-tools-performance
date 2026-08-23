import React from 'react';
const LABEL_37346 = 'component_37346';
export function Component37346({ value = 37346, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37346, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37346, 'data-value': derived.doubled }, children);
}
export default Component37346;

import React from 'react';
const LABEL_4496 = 'component_4496';
export function Component4496({ value = 4496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4496, 'data-value': derived.doubled }, children);
}
export default Component4496;

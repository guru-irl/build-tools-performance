import React from 'react';
const LABEL_14496 = 'component_14496';
export function Component14496({ value = 14496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14496, 'data-value': derived.doubled }, children);
}
export default Component14496;

import React from 'react';
const LABEL_21450 = 'component_21450';
export function Component21450({ value = 21450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21450, 'data-value': derived.doubled }, children);
}
export default Component21450;

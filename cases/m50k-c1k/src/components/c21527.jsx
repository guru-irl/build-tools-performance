import React from 'react';
const LABEL_21527 = 'component_21527';
export function Component21527({ value = 21527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21527, 'data-value': derived.doubled }, children);
}
export default Component21527;

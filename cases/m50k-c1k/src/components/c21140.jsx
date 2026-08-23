import React from 'react';
const LABEL_21140 = 'component_21140';
export function Component21140({ value = 21140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21140, 'data-value': derived.doubled }, children);
}
export default Component21140;

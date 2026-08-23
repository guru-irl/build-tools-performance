import React from 'react';
const LABEL_21180 = 'component_21180';
export function Component21180({ value = 21180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21180, 'data-value': derived.doubled }, children);
}
export default Component21180;

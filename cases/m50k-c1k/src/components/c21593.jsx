import React from 'react';
const LABEL_21593 = 'component_21593';
export function Component21593({ value = 21593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21593, 'data-value': derived.doubled }, children);
}
export default Component21593;

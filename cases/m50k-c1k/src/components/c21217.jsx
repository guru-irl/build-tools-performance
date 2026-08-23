import React from 'react';
const LABEL_21217 = 'component_21217';
export function Component21217({ value = 21217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21217, 'data-value': derived.doubled }, children);
}
export default Component21217;

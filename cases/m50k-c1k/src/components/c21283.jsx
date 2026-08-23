import React from 'react';
const LABEL_21283 = 'component_21283';
export function Component21283({ value = 21283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21283, 'data-value': derived.doubled }, children);
}
export default Component21283;

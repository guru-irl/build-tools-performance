import React from 'react';
const LABEL_21429 = 'component_21429';
export function Component21429({ value = 21429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21429, 'data-value': derived.doubled }, children);
}
export default Component21429;

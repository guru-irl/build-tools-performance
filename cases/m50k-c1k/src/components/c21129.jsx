import React from 'react';
const LABEL_21129 = 'component_21129';
export function Component21129({ value = 21129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21129, 'data-value': derived.doubled }, children);
}
export default Component21129;

import React from 'react';
const LABEL_26624 = 'component_26624';
export function Component26624({ value = 26624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26624, 'data-value': derived.doubled }, children);
}
export default Component26624;

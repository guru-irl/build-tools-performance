import React from 'react';
const LABEL_7624 = 'component_7624';
export function Component7624({ value = 7624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7624, 'data-value': derived.doubled }, children);
}
export default Component7624;

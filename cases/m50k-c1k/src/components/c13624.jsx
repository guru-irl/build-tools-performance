import React from 'react';
const LABEL_13624 = 'component_13624';
export function Component13624({ value = 13624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13624, 'data-value': derived.doubled }, children);
}
export default Component13624;

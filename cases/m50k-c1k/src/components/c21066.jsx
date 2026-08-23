import React from 'react';
const LABEL_21066 = 'component_21066';
export function Component21066({ value = 21066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21066, 'data-value': derived.doubled }, children);
}
export default Component21066;

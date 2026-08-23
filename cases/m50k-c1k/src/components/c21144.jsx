import React from 'react';
const LABEL_21144 = 'component_21144';
export function Component21144({ value = 21144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21144, 'data-value': derived.doubled }, children);
}
export default Component21144;

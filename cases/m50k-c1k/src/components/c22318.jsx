import React from 'react';
const LABEL_22318 = 'component_22318';
export function Component22318({ value = 22318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22318, 'data-value': derived.doubled }, children);
}
export default Component22318;

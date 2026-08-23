import React from 'react';
const LABEL_14481 = 'component_14481';
export function Component14481({ value = 14481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14481, 'data-value': derived.doubled }, children);
}
export default Component14481;

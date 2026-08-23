import React from 'react';
const LABEL_10481 = 'component_10481';
export function Component10481({ value = 10481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10481, 'data-value': derived.doubled }, children);
}
export default Component10481;

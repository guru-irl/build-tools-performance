import React from 'react';
const LABEL_10651 = 'component_10651';
export function Component10651({ value = 10651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10651, 'data-value': derived.doubled }, children);
}
export default Component10651;

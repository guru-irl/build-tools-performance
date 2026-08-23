import React from 'react';
const LABEL_36651 = 'component_36651';
export function Component36651({ value = 36651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36651, 'data-value': derived.doubled }, children);
}
export default Component36651;

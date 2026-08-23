import React from 'react';
const LABEL_11651 = 'component_11651';
export function Component11651({ value = 11651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11651, 'data-value': derived.doubled }, children);
}
export default Component11651;

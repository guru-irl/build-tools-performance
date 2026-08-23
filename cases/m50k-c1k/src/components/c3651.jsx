import React from 'react';
const LABEL_3651 = 'component_3651';
export function Component3651({ value = 3651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3651, 'data-value': derived.doubled }, children);
}
export default Component3651;

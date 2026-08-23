import React from 'react';
const LABEL_34276 = 'component_34276';
export function Component34276({ value = 34276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34276, 'data-value': derived.doubled }, children);
}
export default Component34276;

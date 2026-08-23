import React from 'react';
const LABEL_18571 = 'component_18571';
export function Component18571({ value = 18571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18571, 'data-value': derived.doubled }, children);
}
export default Component18571;

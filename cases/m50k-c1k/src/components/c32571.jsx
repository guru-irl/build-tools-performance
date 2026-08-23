import React from 'react';
const LABEL_32571 = 'component_32571';
export function Component32571({ value = 32571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32571, 'data-value': derived.doubled }, children);
}
export default Component32571;

import React from 'react';
const LABEL_4571 = 'component_4571';
export function Component4571({ value = 4571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4571, 'data-value': derived.doubled }, children);
}
export default Component4571;

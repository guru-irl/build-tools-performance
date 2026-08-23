import React from 'react';
const LABEL_38571 = 'component_38571';
export function Component38571({ value = 38571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38571, 'data-value': derived.doubled }, children);
}
export default Component38571;

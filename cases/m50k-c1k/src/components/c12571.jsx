import React from 'react';
const LABEL_12571 = 'component_12571';
export function Component12571({ value = 12571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12571, 'data-value': derived.doubled }, children);
}
export default Component12571;

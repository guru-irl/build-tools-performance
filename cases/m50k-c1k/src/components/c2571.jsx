import React from 'react';
const LABEL_2571 = 'component_2571';
export function Component2571({ value = 2571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2571, 'data-value': derived.doubled }, children);
}
export default Component2571;

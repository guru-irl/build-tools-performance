import React from 'react';
const LABEL_46571 = 'component_46571';
export function Component46571({ value = 46571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46571, 'data-value': derived.doubled }, children);
}
export default Component46571;

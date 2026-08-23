import React from 'react';
const LABEL_7571 = 'component_7571';
export function Component7571({ value = 7571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7571, 'data-value': derived.doubled }, children);
}
export default Component7571;

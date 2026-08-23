import React from 'react';
const LABEL_21571 = 'component_21571';
export function Component21571({ value = 21571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21571, 'data-value': derived.doubled }, children);
}
export default Component21571;

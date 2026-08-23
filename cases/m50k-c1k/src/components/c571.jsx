import React from 'react';
const LABEL_571 = 'component_571';
export function Component571({ value = 571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_571, 'data-value': derived.doubled }, children);
}
export default Component571;

import React from 'react';
const LABEL_10571 = 'component_10571';
export function Component10571({ value = 10571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10571, 'data-value': derived.doubled }, children);
}
export default Component10571;

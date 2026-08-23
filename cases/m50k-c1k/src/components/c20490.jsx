import React from 'react';
const LABEL_20490 = 'component_20490';
export function Component20490({ value = 20490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20490, 'data-value': derived.doubled }, children);
}
export default Component20490;

import React from 'react';
const LABEL_20785 = 'component_20785';
export function Component20785({ value = 20785, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20785, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20785, 'data-value': derived.doubled }, children);
}
export default Component20785;

import React from 'react';
const LABEL_20654 = 'component_20654';
export function Component20654({ value = 20654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20654, 'data-value': derived.doubled }, children);
}
export default Component20654;

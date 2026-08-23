import React from 'react';
const LABEL_36491 = 'component_36491';
export function Component36491({ value = 36491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36491, 'data-value': derived.doubled }, children);
}
export default Component36491;

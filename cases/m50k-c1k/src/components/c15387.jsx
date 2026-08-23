import React from 'react';
const LABEL_15387 = 'component_15387';
export function Component15387({ value = 15387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15387, 'data-value': derived.doubled }, children);
}
export default Component15387;

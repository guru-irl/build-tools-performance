import React from 'react';
const LABEL_43354 = 'component_43354';
export function Component43354({ value = 43354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43354, 'data-value': derived.doubled }, children);
}
export default Component43354;

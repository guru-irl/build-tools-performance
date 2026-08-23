import React from 'react';
const LABEL_15594 = 'component_15594';
export function Component15594({ value = 15594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15594, 'data-value': derived.doubled }, children);
}
export default Component15594;

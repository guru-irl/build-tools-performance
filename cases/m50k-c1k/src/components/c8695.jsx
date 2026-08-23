import React from 'react';
const LABEL_8695 = 'component_8695';
export function Component8695({ value = 8695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8695, 'data-value': derived.doubled }, children);
}
export default Component8695;

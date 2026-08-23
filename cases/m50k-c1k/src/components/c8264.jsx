import React from 'react';
const LABEL_8264 = 'component_8264';
export function Component8264({ value = 8264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8264, 'data-value': derived.doubled }, children);
}
export default Component8264;

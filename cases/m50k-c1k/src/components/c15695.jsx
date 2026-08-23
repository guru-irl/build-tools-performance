import React from 'react';
const LABEL_15695 = 'component_15695';
export function Component15695({ value = 15695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15695, 'data-value': derived.doubled }, children);
}
export default Component15695;

import React from 'react';
const LABEL_35070 = 'component_35070';
export function Component35070({ value = 35070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35070, 'data-value': derived.doubled }, children);
}
export default Component35070;

import React from 'react';
const LABEL_35306 = 'component_35306';
export function Component35306({ value = 35306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35306, 'data-value': derived.doubled }, children);
}
export default Component35306;

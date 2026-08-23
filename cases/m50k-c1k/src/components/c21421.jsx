import React from 'react';
const LABEL_21421 = 'component_21421';
export function Component21421({ value = 21421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21421, 'data-value': derived.doubled }, children);
}
export default Component21421;

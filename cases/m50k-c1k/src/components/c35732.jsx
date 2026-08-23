import React from 'react';
const LABEL_35732 = 'component_35732';
export function Component35732({ value = 35732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35732, 'data-value': derived.doubled }, children);
}
export default Component35732;

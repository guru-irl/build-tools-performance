import React from 'react';
const LABEL_22641 = 'component_22641';
export function Component22641({ value = 22641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22641, 'data-value': derived.doubled }, children);
}
export default Component22641;

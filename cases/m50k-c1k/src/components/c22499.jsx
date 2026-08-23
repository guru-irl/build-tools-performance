import React from 'react';
const LABEL_22499 = 'component_22499';
export function Component22499({ value = 22499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22499, 'data-value': derived.doubled }, children);
}
export default Component22499;

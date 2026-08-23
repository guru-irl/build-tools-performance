import React from 'react';
const LABEL_17641 = 'component_17641';
export function Component17641({ value = 17641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17641, 'data-value': derived.doubled }, children);
}
export default Component17641;

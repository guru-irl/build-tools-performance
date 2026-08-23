import React from 'react';
const LABEL_15063 = 'component_15063';
export function Component15063({ value = 15063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15063, 'data-value': derived.doubled }, children);
}
export default Component15063;

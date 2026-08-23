import React from 'react';
const LABEL_28242 = 'component_28242';
export function Component28242({ value = 28242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28242, 'data-value': derived.doubled }, children);
}
export default Component28242;

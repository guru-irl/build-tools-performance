import React from 'react';
const LABEL_28421 = 'component_28421';
export function Component28421({ value = 28421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28421, 'data-value': derived.doubled }, children);
}
export default Component28421;

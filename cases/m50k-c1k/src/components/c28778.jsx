import React from 'react';
const LABEL_28778 = 'component_28778';
export function Component28778({ value = 28778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28778, 'data-value': derived.doubled }, children);
}
export default Component28778;

import React from 'react';
const LABEL_15652 = 'component_15652';
export function Component15652({ value = 15652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15652, 'data-value': derived.doubled }, children);
}
export default Component15652;

import React from 'react';
const LABEL_15147 = 'component_15147';
export function Component15147({ value = 15147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15147, 'data-value': derived.doubled }, children);
}
export default Component15147;

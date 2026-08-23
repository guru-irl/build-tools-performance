import React from 'react';
const LABEL_15462 = 'component_15462';
export function Component15462({ value = 15462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15462, 'data-value': derived.doubled }, children);
}
export default Component15462;

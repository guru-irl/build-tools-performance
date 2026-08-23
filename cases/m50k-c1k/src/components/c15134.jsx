import React from 'react';
const LABEL_15134 = 'component_15134';
export function Component15134({ value = 15134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15134, 'data-value': derived.doubled }, children);
}
export default Component15134;

import React from 'react';
const LABEL_15126 = 'component_15126';
export function Component15126({ value = 15126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15126, 'data-value': derived.doubled }, children);
}
export default Component15126;

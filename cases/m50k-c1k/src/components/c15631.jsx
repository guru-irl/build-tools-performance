import React from 'react';
const LABEL_15631 = 'component_15631';
export function Component15631({ value = 15631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15631, 'data-value': derived.doubled }, children);
}
export default Component15631;

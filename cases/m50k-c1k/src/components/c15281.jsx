import React from 'react';
const LABEL_15281 = 'component_15281';
export function Component15281({ value = 15281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15281, 'data-value': derived.doubled }, children);
}
export default Component15281;

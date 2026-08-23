import React from 'react';
const LABEL_15039 = 'component_15039';
export function Component15039({ value = 15039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15039, 'data-value': derived.doubled }, children);
}
export default Component15039;

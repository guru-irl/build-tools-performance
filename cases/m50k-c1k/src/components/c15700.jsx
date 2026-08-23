import React from 'react';
const LABEL_15700 = 'component_15700';
export function Component15700({ value = 15700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15700, 'data-value': derived.doubled }, children);
}
export default Component15700;

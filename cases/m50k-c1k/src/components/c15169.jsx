import React from 'react';
const LABEL_15169 = 'component_15169';
export function Component15169({ value = 15169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15169, 'data-value': derived.doubled }, children);
}
export default Component15169;

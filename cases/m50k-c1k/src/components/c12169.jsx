import React from 'react';
const LABEL_12169 = 'component_12169';
export function Component12169({ value = 12169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12169, 'data-value': derived.doubled }, children);
}
export default Component12169;

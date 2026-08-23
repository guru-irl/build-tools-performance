import React from 'react';
const LABEL_15804 = 'component_15804';
export function Component15804({ value = 15804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15804, 'data-value': derived.doubled }, children);
}
export default Component15804;

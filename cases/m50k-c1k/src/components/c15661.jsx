import React from 'react';
const LABEL_15661 = 'component_15661';
export function Component15661({ value = 15661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15661, 'data-value': derived.doubled }, children);
}
export default Component15661;

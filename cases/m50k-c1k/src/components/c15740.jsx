import React from 'react';
const LABEL_15740 = 'component_15740';
export function Component15740({ value = 15740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15740, 'data-value': derived.doubled }, children);
}
export default Component15740;

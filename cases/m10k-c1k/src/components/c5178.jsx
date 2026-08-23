import React from 'react';
const LABEL_5178 = 'component_5178';
export function Component5178({ value = 5178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5178, 'data-value': derived.doubled }, children);
}
export default Component5178;

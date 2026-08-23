import React from 'react';
const LABEL_32740 = 'component_32740';
export function Component32740({ value = 32740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32740, 'data-value': derived.doubled }, children);
}
export default Component32740;

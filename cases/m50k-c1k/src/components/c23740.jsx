import React from 'react';
const LABEL_23740 = 'component_23740';
export function Component23740({ value = 23740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23740, 'data-value': derived.doubled }, children);
}
export default Component23740;

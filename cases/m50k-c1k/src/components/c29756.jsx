import React from 'react';
const LABEL_29756 = 'component_29756';
export function Component29756({ value = 29756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29756, 'data-value': derived.doubled }, children);
}
export default Component29756;

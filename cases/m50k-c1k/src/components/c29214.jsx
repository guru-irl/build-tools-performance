import React from 'react';
const LABEL_29214 = 'component_29214';
export function Component29214({ value = 29214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29214, 'data-value': derived.doubled }, children);
}
export default Component29214;

import React from 'react';
const LABEL_29290 = 'component_29290';
export function Component29290({ value = 29290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29290, 'data-value': derived.doubled }, children);
}
export default Component29290;

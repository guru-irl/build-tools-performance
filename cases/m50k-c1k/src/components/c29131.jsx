import React from 'react';
const LABEL_29131 = 'component_29131';
export function Component29131({ value = 29131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29131, 'data-value': derived.doubled }, children);
}
export default Component29131;

import React from 'react';
const LABEL_29084 = 'component_29084';
export function Component29084({ value = 29084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29084, 'data-value': derived.doubled }, children);
}
export default Component29084;

import React from 'react';
const LABEL_40084 = 'component_40084';
export function Component40084({ value = 40084, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40084, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40084, 'data-value': derived.doubled }, children);
}
export default Component40084;

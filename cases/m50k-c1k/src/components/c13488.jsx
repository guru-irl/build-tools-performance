import React from 'react';
const LABEL_13488 = 'component_13488';
export function Component13488({ value = 13488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13488, 'data-value': derived.doubled }, children);
}
export default Component13488;

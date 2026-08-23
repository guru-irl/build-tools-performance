import React from 'react';
const LABEL_43427 = 'component_43427';
export function Component43427({ value = 43427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43427, 'data-value': derived.doubled }, children);
}
export default Component43427;

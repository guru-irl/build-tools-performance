import React from 'react';
const LABEL_14504 = 'component_14504';
export function Component14504({ value = 14504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14504, 'data-value': derived.doubled }, children);
}
export default Component14504;

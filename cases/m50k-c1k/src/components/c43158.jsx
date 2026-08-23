import React from 'react';
const LABEL_43158 = 'component_43158';
export function Component43158({ value = 43158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43158, 'data-value': derived.doubled }, children);
}
export default Component43158;

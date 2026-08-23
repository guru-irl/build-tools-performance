import React from 'react';
const LABEL_43292 = 'component_43292';
export function Component43292({ value = 43292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43292, 'data-value': derived.doubled }, children);
}
export default Component43292;

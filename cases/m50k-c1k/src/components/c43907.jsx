import React from 'react';
const LABEL_43907 = 'component_43907';
export function Component43907({ value = 43907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43907, 'data-value': derived.doubled }, children);
}
export default Component43907;

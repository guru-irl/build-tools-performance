import React from 'react';
const LABEL_43849 = 'component_43849';
export function Component43849({ value = 43849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43849, 'data-value': derived.doubled }, children);
}
export default Component43849;

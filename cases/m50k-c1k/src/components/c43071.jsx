import React from 'react';
const LABEL_43071 = 'component_43071';
export function Component43071({ value = 43071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43071, 'data-value': derived.doubled }, children);
}
export default Component43071;

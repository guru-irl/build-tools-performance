import React from 'react';
const LABEL_43707 = 'component_43707';
export function Component43707({ value = 43707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43707, 'data-value': derived.doubled }, children);
}
export default Component43707;

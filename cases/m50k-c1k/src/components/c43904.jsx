import React from 'react';
const LABEL_43904 = 'component_43904';
export function Component43904({ value = 43904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43904, 'data-value': derived.doubled }, children);
}
export default Component43904;

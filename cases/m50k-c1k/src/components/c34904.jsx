import React from 'react';
const LABEL_34904 = 'component_34904';
export function Component34904({ value = 34904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34904, 'data-value': derived.doubled }, children);
}
export default Component34904;

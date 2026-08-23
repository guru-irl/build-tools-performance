import React from 'react';
const LABEL_43111 = 'component_43111';
export function Component43111({ value = 43111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43111, 'data-value': derived.doubled }, children);
}
export default Component43111;

import React from 'react';
const LABEL_36904 = 'component_36904';
export function Component36904({ value = 36904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36904, 'data-value': derived.doubled }, children);
}
export default Component36904;

import React from 'react';
const LABEL_15904 = 'component_15904';
export function Component15904({ value = 15904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15904, 'data-value': derived.doubled }, children);
}
export default Component15904;

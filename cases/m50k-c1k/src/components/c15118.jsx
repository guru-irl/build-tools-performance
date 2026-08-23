import React from 'react';
const LABEL_15118 = 'component_15118';
export function Component15118({ value = 15118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15118, 'data-value': derived.doubled }, children);
}
export default Component15118;

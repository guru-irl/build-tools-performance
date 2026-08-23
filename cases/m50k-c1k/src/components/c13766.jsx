import React from 'react';
const LABEL_13766 = 'component_13766';
export function Component13766({ value = 13766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13766, 'data-value': derived.doubled }, children);
}
export default Component13766;

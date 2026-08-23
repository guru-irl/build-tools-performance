import React from 'react';
const LABEL_6766 = 'component_6766';
export function Component6766({ value = 6766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6766, 'data-value': derived.doubled }, children);
}
export default Component6766;

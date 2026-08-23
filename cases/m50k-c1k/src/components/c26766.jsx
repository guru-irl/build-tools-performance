import React from 'react';
const LABEL_26766 = 'component_26766';
export function Component26766({ value = 26766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26766, 'data-value': derived.doubled }, children);
}
export default Component26766;

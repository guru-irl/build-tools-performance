import React from 'react';
const LABEL_16766 = 'component_16766';
export function Component16766({ value = 16766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16766, 'data-value': derived.doubled }, children);
}
export default Component16766;

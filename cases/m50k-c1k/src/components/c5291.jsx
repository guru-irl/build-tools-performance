import React from 'react';
const LABEL_5291 = 'component_5291';
export function Component5291({ value = 5291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5291, 'data-value': derived.doubled }, children);
}
export default Component5291;

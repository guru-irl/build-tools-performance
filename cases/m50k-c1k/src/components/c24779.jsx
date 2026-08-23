import React from 'react';
const LABEL_24779 = 'component_24779';
export function Component24779({ value = 24779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24779, 'data-value': derived.doubled }, children);
}
export default Component24779;

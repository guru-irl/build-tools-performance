import React from 'react';
const LABEL_11117 = 'component_11117';
export function Component11117({ value = 11117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11117, 'data-value': derived.doubled }, children);
}
export default Component11117;

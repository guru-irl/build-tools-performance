import React from 'react';
const LABEL_10117 = 'component_10117';
export function Component10117({ value = 10117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10117, 'data-value': derived.doubled }, children);
}
export default Component10117;

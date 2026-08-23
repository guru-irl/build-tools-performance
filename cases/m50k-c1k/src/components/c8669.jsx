import React from 'react';
const LABEL_8669 = 'component_8669';
export function Component8669({ value = 8669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8669, 'data-value': derived.doubled }, children);
}
export default Component8669;

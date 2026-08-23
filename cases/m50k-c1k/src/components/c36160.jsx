import React from 'react';
const LABEL_36160 = 'component_36160';
export function Component36160({ value = 36160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36160, 'data-value': derived.doubled }, children);
}
export default Component36160;

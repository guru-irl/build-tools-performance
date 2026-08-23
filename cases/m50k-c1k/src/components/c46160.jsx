import React from 'react';
const LABEL_46160 = 'component_46160';
export function Component46160({ value = 46160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46160, 'data-value': derived.doubled }, children);
}
export default Component46160;

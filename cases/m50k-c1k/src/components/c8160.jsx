import React from 'react';
const LABEL_8160 = 'component_8160';
export function Component8160({ value = 8160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8160, 'data-value': derived.doubled }, children);
}
export default Component8160;

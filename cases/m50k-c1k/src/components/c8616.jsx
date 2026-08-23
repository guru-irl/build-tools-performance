import React from 'react';
const LABEL_8616 = 'component_8616';
export function Component8616({ value = 8616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8616, 'data-value': derived.doubled }, children);
}
export default Component8616;

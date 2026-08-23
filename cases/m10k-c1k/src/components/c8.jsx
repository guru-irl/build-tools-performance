import React from 'react';
const LABEL_8 = 'component_8';
export function Component8({ value = 8, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8, 'data-value': derived.doubled }, children);
}
export default Component8;

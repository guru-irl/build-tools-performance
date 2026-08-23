import React from 'react';
const LABEL_8275 = 'component_8275';
export function Component8275({ value = 8275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8275, 'data-value': derived.doubled }, children);
}
export default Component8275;

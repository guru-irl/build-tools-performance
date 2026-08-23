import React from 'react';
const LABEL_44275 = 'component_44275';
export function Component44275({ value = 44275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44275, 'data-value': derived.doubled }, children);
}
export default Component44275;

import React from 'react';
const LABEL_275 = 'component_275';
export function Component275({ value = 275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_275, 'data-value': derived.doubled }, children);
}
export default Component275;

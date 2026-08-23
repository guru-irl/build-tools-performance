import React from 'react';
const LABEL_32275 = 'component_32275';
export function Component32275({ value = 32275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32275, 'data-value': derived.doubled }, children);
}
export default Component32275;

import React from 'react';
const LABEL_6303 = 'component_6303';
export function Component6303({ value = 6303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6303, 'data-value': derived.doubled }, children);
}
export default Component6303;

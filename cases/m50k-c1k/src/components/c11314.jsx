import React from 'react';
const LABEL_11314 = 'component_11314';
export function Component11314({ value = 11314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11314, 'data-value': derived.doubled }, children);
}
export default Component11314;

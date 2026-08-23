import React from 'react';
const LABEL_33215 = 'component_33215';
export function Component33215({ value = 33215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33215, 'data-value': derived.doubled }, children);
}
export default Component33215;

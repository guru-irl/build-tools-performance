import React from 'react';
const LABEL_36237 = 'component_36237';
export function Component36237({ value = 36237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36237, 'data-value': derived.doubled }, children);
}
export default Component36237;

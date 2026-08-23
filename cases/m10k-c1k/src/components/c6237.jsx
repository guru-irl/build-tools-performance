import React from 'react';
const LABEL_6237 = 'component_6237';
export function Component6237({ value = 6237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6237, 'data-value': derived.doubled }, children);
}
export default Component6237;

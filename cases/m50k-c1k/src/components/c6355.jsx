import React from 'react';
const LABEL_6355 = 'component_6355';
export function Component6355({ value = 6355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6355, 'data-value': derived.doubled }, children);
}
export default Component6355;

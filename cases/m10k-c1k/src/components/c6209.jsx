import React from 'react';
const LABEL_6209 = 'component_6209';
export function Component6209({ value = 6209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6209, 'data-value': derived.doubled }, children);
}
export default Component6209;

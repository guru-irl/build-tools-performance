import React from 'react';
const LABEL_6529 = 'component_6529';
export function Component6529({ value = 6529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6529, 'data-value': derived.doubled }, children);
}
export default Component6529;

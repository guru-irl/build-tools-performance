import React from 'react';
const LABEL_6000 = 'component_6000';
export function Component6000({ value = 6000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6000, 'data-value': derived.doubled }, children);
}
export default Component6000;

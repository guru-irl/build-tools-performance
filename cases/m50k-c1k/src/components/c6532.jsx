import React from 'react';
const LABEL_6532 = 'component_6532';
export function Component6532({ value = 6532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6532, 'data-value': derived.doubled }, children);
}
export default Component6532;

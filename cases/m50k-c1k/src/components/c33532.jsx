import React from 'react';
const LABEL_33532 = 'component_33532';
export function Component33532({ value = 33532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33532, 'data-value': derived.doubled }, children);
}
export default Component33532;

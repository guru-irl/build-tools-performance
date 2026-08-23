import React from 'react';
const LABEL_45167 = 'component_45167';
export function Component45167({ value = 45167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45167, 'data-value': derived.doubled }, children);
}
export default Component45167;

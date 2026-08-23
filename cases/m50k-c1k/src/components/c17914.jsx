import React from 'react';
const LABEL_17914 = 'component_17914';
export function Component17914({ value = 17914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17914, 'data-value': derived.doubled }, children);
}
export default Component17914;

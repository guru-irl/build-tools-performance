import React from 'react';
const LABEL_28558 = 'component_28558';
export function Component28558({ value = 28558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28558, 'data-value': derived.doubled }, children);
}
export default Component28558;

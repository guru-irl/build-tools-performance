import React from 'react';
const LABEL_17829 = 'component_17829';
export function Component17829({ value = 17829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17829, 'data-value': derived.doubled }, children);
}
export default Component17829;

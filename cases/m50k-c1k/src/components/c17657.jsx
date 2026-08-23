import React from 'react';
const LABEL_17657 = 'component_17657';
export function Component17657({ value = 17657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17657, 'data-value': derived.doubled }, children);
}
export default Component17657;

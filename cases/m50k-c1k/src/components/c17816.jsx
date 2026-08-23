import React from 'react';
const LABEL_17816 = 'component_17816';
export function Component17816({ value = 17816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17816, 'data-value': derived.doubled }, children);
}
export default Component17816;

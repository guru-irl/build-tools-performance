import React from 'react';
const LABEL_17239 = 'component_17239';
export function Component17239({ value = 17239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17239, 'data-value': derived.doubled }, children);
}
export default Component17239;

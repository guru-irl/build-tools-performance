import React from 'react';
const LABEL_17146 = 'component_17146';
export function Component17146({ value = 17146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17146, 'data-value': derived.doubled }, children);
}
export default Component17146;

import React from 'react';
const LABEL_17410 = 'component_17410';
export function Component17410({ value = 17410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17410, 'data-value': derived.doubled }, children);
}
export default Component17410;

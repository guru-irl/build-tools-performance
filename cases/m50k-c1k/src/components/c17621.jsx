import React from 'react';
const LABEL_17621 = 'component_17621';
export function Component17621({ value = 17621, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17621, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17621, 'data-value': derived.doubled }, children);
}
export default Component17621;

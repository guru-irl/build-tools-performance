import React from 'react';
const LABEL_17192 = 'component_17192';
export function Component17192({ value = 17192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17192, 'data-value': derived.doubled }, children);
}
export default Component17192;

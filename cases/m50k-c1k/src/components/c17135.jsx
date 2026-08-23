import React from 'react';
const LABEL_17135 = 'component_17135';
export function Component17135({ value = 17135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17135, 'data-value': derived.doubled }, children);
}
export default Component17135;

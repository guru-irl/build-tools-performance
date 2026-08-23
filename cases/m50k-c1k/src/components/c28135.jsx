import React from 'react';
const LABEL_28135 = 'component_28135';
export function Component28135({ value = 28135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28135, 'data-value': derived.doubled }, children);
}
export default Component28135;

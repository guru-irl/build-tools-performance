import React from 'react';
const LABEL_21135 = 'component_21135';
export function Component21135({ value = 21135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21135, 'data-value': derived.doubled }, children);
}
export default Component21135;

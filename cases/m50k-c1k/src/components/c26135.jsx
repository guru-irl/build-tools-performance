import React from 'react';
const LABEL_26135 = 'component_26135';
export function Component26135({ value = 26135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26135, 'data-value': derived.doubled }, children);
}
export default Component26135;

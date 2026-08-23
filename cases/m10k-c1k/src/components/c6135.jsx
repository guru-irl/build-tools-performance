import React from 'react';
const LABEL_6135 = 'component_6135';
export function Component6135({ value = 6135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6135, 'data-value': derived.doubled }, children);
}
export default Component6135;

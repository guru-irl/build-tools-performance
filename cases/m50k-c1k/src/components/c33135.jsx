import React from 'react';
const LABEL_33135 = 'component_33135';
export function Component33135({ value = 33135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33135, 'data-value': derived.doubled }, children);
}
export default Component33135;

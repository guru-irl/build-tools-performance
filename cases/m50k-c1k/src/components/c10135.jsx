import React from 'react';
const LABEL_10135 = 'component_10135';
export function Component10135({ value = 10135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10135, 'data-value': derived.doubled }, children);
}
export default Component10135;

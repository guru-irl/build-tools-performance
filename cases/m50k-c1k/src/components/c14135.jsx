import React from 'react';
const LABEL_14135 = 'component_14135';
export function Component14135({ value = 14135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14135, 'data-value': derived.doubled }, children);
}
export default Component14135;

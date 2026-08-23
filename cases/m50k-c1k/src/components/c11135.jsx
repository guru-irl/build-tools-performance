import React from 'react';
const LABEL_11135 = 'component_11135';
export function Component11135({ value = 11135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11135, 'data-value': derived.doubled }, children);
}
export default Component11135;

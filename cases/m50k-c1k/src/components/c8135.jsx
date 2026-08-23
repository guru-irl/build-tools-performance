import React from 'react';
const LABEL_8135 = 'component_8135';
export function Component8135({ value = 8135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8135, 'data-value': derived.doubled }, children);
}
export default Component8135;

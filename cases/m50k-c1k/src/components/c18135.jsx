import React from 'react';
const LABEL_18135 = 'component_18135';
export function Component18135({ value = 18135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18135, 'data-value': derived.doubled }, children);
}
export default Component18135;

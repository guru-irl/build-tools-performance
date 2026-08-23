import React from 'react';
const LABEL_34135 = 'component_34135';
export function Component34135({ value = 34135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34135, 'data-value': derived.doubled }, children);
}
export default Component34135;

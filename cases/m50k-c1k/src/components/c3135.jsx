import React from 'react';
const LABEL_3135 = 'component_3135';
export function Component3135({ value = 3135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3135, 'data-value': derived.doubled }, children);
}
export default Component3135;

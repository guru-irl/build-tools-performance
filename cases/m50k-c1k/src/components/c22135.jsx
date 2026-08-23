import React from 'react';
const LABEL_22135 = 'component_22135';
export function Component22135({ value = 22135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22135, 'data-value': derived.doubled }, children);
}
export default Component22135;

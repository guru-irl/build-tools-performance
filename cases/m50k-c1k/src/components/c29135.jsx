import React from 'react';
const LABEL_29135 = 'component_29135';
export function Component29135({ value = 29135, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29135, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29135, 'data-value': derived.doubled }, children);
}
export default Component29135;

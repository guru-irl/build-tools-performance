import React from 'react';
const LABEL_29044 = 'component_29044';
export function Component29044({ value = 29044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29044, 'data-value': derived.doubled }, children);
}
export default Component29044;

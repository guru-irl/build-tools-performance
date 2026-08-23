import React from 'react';
const LABEL_29648 = 'component_29648';
export function Component29648({ value = 29648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29648, 'data-value': derived.doubled }, children);
}
export default Component29648;

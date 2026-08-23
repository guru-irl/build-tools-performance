import React from 'react';
const LABEL_29430 = 'component_29430';
export function Component29430({ value = 29430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29430, 'data-value': derived.doubled }, children);
}
export default Component29430;

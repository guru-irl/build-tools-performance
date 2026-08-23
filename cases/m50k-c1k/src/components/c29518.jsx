import React from 'react';
const LABEL_29518 = 'component_29518';
export function Component29518({ value = 29518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29518, 'data-value': derived.doubled }, children);
}
export default Component29518;

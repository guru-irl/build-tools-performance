import React from 'react';
const LABEL_29427 = 'component_29427';
export function Component29427({ value = 29427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29427, 'data-value': derived.doubled }, children);
}
export default Component29427;

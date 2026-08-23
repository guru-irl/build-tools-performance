import React from 'react';
const LABEL_29066 = 'component_29066';
export function Component29066({ value = 29066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29066, 'data-value': derived.doubled }, children);
}
export default Component29066;

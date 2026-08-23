import React from 'react';
const LABEL_29173 = 'component_29173';
export function Component29173({ value = 29173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29173, 'data-value': derived.doubled }, children);
}
export default Component29173;

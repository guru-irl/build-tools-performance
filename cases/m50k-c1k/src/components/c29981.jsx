import React from 'react';
const LABEL_29981 = 'component_29981';
export function Component29981({ value = 29981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29981, 'data-value': derived.doubled }, children);
}
export default Component29981;

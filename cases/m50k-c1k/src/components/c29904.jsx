import React from 'react';
const LABEL_29904 = 'component_29904';
export function Component29904({ value = 29904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29904, 'data-value': derived.doubled }, children);
}
export default Component29904;

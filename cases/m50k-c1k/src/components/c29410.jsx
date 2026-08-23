import React from 'react';
const LABEL_29410 = 'component_29410';
export function Component29410({ value = 29410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29410, 'data-value': derived.doubled }, children);
}
export default Component29410;

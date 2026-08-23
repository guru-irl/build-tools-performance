import React from 'react';
const LABEL_29873 = 'component_29873';
export function Component29873({ value = 29873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29873, 'data-value': derived.doubled }, children);
}
export default Component29873;

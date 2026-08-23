import React from 'react';
const LABEL_29299 = 'component_29299';
export function Component29299({ value = 29299, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29299, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29299, 'data-value': derived.doubled }, children);
}
export default Component29299;

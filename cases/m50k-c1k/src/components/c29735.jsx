import React from 'react';
const LABEL_29735 = 'component_29735';
export function Component29735({ value = 29735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29735, 'data-value': derived.doubled }, children);
}
export default Component29735;

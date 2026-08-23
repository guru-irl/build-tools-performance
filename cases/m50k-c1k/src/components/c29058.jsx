import React from 'react';
const LABEL_29058 = 'component_29058';
export function Component29058({ value = 29058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29058, 'data-value': derived.doubled }, children);
}
export default Component29058;

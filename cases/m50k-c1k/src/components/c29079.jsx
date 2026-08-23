import React from 'react';
const LABEL_29079 = 'component_29079';
export function Component29079({ value = 29079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29079, 'data-value': derived.doubled }, children);
}
export default Component29079;

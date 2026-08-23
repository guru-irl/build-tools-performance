import React from 'react';
const LABEL_29573 = 'component_29573';
export function Component29573({ value = 29573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29573, 'data-value': derived.doubled }, children);
}
export default Component29573;

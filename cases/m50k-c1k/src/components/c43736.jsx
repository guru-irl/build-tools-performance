import React from 'react';
const LABEL_43736 = 'component_43736';
export function Component43736({ value = 43736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43736, 'data-value': derived.doubled }, children);
}
export default Component43736;

import React from 'react';
const LABEL_29891 = 'component_29891';
export function Component29891({ value = 29891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29891, 'data-value': derived.doubled }, children);
}
export default Component29891;

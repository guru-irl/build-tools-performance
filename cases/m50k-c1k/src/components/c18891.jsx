import React from 'react';
const LABEL_18891 = 'component_18891';
export function Component18891({ value = 18891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18891, 'data-value': derived.doubled }, children);
}
export default Component18891;

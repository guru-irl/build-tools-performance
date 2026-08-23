import React from 'react';
const LABEL_39891 = 'component_39891';
export function Component39891({ value = 39891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39891, 'data-value': derived.doubled }, children);
}
export default Component39891;

import React from 'react';
const LABEL_39462 = 'component_39462';
export function Component39462({ value = 39462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39462, 'data-value': derived.doubled }, children);
}
export default Component39462;

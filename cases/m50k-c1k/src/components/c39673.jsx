import React from 'react';
const LABEL_39673 = 'component_39673';
export function Component39673({ value = 39673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39673, 'data-value': derived.doubled }, children);
}
export default Component39673;

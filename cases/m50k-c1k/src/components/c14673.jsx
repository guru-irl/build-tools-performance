import React from 'react';
const LABEL_14673 = 'component_14673';
export function Component14673({ value = 14673, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14673, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14673, 'data-value': derived.doubled }, children);
}
export default Component14673;

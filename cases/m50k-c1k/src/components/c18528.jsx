import React from 'react';
const LABEL_18528 = 'component_18528';
export function Component18528({ value = 18528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18528, 'data-value': derived.doubled }, children);
}
export default Component18528;

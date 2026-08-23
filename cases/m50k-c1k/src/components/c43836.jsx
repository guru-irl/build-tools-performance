import React from 'react';
const LABEL_43836 = 'component_43836';
export function Component43836({ value = 43836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43836, 'data-value': derived.doubled }, children);
}
export default Component43836;

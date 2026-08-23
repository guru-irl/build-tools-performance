import React from 'react';
const LABEL_18187 = 'component_18187';
export function Component18187({ value = 18187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18187, 'data-value': derived.doubled }, children);
}
export default Component18187;

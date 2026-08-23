import React from 'react';
const LABEL_18202 = 'component_18202';
export function Component18202({ value = 18202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18202, 'data-value': derived.doubled }, children);
}
export default Component18202;

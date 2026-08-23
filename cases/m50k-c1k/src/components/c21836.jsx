import React from 'react';
const LABEL_21836 = 'component_21836';
export function Component21836({ value = 21836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21836, 'data-value': derived.doubled }, children);
}
export default Component21836;

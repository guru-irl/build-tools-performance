import React from 'react';
const LABEL_25280 = 'component_25280';
export function Component25280({ value = 25280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25280, 'data-value': derived.doubled }, children);
}
export default Component25280;

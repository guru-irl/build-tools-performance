import React from 'react';
const LABEL_25018 = 'component_25018';
export function Component25018({ value = 25018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25018, 'data-value': derived.doubled }, children);
}
export default Component25018;

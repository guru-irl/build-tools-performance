import React from 'react';
const LABEL_25977 = 'component_25977';
export function Component25977({ value = 25977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25977, 'data-value': derived.doubled }, children);
}
export default Component25977;

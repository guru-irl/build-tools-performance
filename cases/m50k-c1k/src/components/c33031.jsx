import React from 'react';
const LABEL_33031 = 'component_33031';
export function Component33031({ value = 33031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33031, 'data-value': derived.doubled }, children);
}
export default Component33031;

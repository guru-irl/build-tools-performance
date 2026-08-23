import React from 'react';
const LABEL_25315 = 'component_25315';
export function Component25315({ value = 25315, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25315, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25315, 'data-value': derived.doubled }, children);
}
export default Component25315;

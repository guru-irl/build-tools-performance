import React from 'react';
const LABEL_25880 = 'component_25880';
export function Component25880({ value = 25880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25880, 'data-value': derived.doubled }, children);
}
export default Component25880;

import React from 'react';
const LABEL_33290 = 'component_33290';
export function Component33290({ value = 33290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33290, 'data-value': derived.doubled }, children);
}
export default Component33290;

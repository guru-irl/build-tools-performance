import React from 'react';
const LABEL_21220 = 'component_21220';
export function Component21220({ value = 21220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21220, 'data-value': derived.doubled }, children);
}
export default Component21220;

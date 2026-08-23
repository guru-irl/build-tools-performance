import React from 'react';
const LABEL_33220 = 'component_33220';
export function Component33220({ value = 33220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33220, 'data-value': derived.doubled }, children);
}
export default Component33220;

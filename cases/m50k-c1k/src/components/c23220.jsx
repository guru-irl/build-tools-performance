import React from 'react';
const LABEL_23220 = 'component_23220';
export function Component23220({ value = 23220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23220, 'data-value': derived.doubled }, children);
}
export default Component23220;

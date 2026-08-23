import React from 'react';
const LABEL_28220 = 'component_28220';
export function Component28220({ value = 28220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28220, 'data-value': derived.doubled }, children);
}
export default Component28220;

import React from 'react';
const LABEL_11220 = 'component_11220';
export function Component11220({ value = 11220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11220, 'data-value': derived.doubled }, children);
}
export default Component11220;

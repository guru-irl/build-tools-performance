import React from 'react';
const LABEL_220 = 'component_220';
export function Component220({ value = 220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_220, 'data-value': derived.doubled }, children);
}
export default Component220;

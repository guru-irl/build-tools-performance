import React from 'react';
const LABEL_32220 = 'component_32220';
export function Component32220({ value = 32220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32220, 'data-value': derived.doubled }, children);
}
export default Component32220;

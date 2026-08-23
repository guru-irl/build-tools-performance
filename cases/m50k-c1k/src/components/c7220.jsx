import React from 'react';
const LABEL_7220 = 'component_7220';
export function Component7220({ value = 7220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7220, 'data-value': derived.doubled }, children);
}
export default Component7220;

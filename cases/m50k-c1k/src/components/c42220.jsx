import React from 'react';
const LABEL_42220 = 'component_42220';
export function Component42220({ value = 42220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42220, 'data-value': derived.doubled }, children);
}
export default Component42220;

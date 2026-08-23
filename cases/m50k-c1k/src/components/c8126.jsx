import React from 'react';
const LABEL_8126 = 'component_8126';
export function Component8126({ value = 8126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8126, 'data-value': derived.doubled }, children);
}
export default Component8126;

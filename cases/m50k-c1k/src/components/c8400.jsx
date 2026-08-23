import React from 'react';
const LABEL_8400 = 'component_8400';
export function Component8400({ value = 8400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8400, 'data-value': derived.doubled }, children);
}
export default Component8400;

import React from 'react';
const LABEL_32400 = 'component_32400';
export function Component32400({ value = 32400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32400, 'data-value': derived.doubled }, children);
}
export default Component32400;

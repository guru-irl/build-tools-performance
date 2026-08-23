import React from 'react';
const LABEL_8100 = 'component_8100';
export function Component8100({ value = 8100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8100, 'data-value': derived.doubled }, children);
}
export default Component8100;

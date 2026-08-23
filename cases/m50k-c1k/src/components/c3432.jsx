import React from 'react';
const LABEL_3432 = 'component_3432';
export function Component3432({ value = 3432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3432, 'data-value': derived.doubled }, children);
}
export default Component3432;

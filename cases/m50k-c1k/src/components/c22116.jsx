import React from 'react';
const LABEL_22116 = 'component_22116';
export function Component22116({ value = 22116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22116, 'data-value': derived.doubled }, children);
}
export default Component22116;

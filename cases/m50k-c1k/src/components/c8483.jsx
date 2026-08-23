import React from 'react';
const LABEL_8483 = 'component_8483';
export function Component8483({ value = 8483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8483, 'data-value': derived.doubled }, children);
}
export default Component8483;

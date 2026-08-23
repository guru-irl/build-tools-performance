import React from 'react';
const LABEL_41483 = 'component_41483';
export function Component41483({ value = 41483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41483, 'data-value': derived.doubled }, children);
}
export default Component41483;

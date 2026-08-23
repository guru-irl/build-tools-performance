import React from 'react';
const LABEL_41077 = 'component_41077';
export function Component41077({ value = 41077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41077, 'data-value': derived.doubled }, children);
}
export default Component41077;

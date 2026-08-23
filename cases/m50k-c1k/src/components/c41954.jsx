import React from 'react';
const LABEL_41954 = 'component_41954';
export function Component41954({ value = 41954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41954, 'data-value': derived.doubled }, children);
}
export default Component41954;

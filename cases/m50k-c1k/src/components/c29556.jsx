import React from 'react';
const LABEL_29556 = 'component_29556';
export function Component29556({ value = 29556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29556, 'data-value': derived.doubled }, children);
}
export default Component29556;

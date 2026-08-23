import React from 'react';
const LABEL_1428 = 'component_1428';
export function Component1428({ value = 1428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1428, 'data-value': derived.doubled }, children);
}
export default Component1428;

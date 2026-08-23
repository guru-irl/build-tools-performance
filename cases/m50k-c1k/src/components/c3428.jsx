import React from 'react';
const LABEL_3428 = 'component_3428';
export function Component3428({ value = 3428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3428, 'data-value': derived.doubled }, children);
}
export default Component3428;

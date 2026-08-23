import React from 'react';
const LABEL_428 = 'component_428';
export function Component428({ value = 428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_428, 'data-value': derived.doubled }, children);
}
export default Component428;

import React from 'react';
const LABEL_7428 = 'component_7428';
export function Component7428({ value = 7428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7428, 'data-value': derived.doubled }, children);
}
export default Component7428;

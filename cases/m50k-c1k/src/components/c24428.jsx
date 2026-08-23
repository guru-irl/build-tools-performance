import React from 'react';
const LABEL_24428 = 'component_24428';
export function Component24428({ value = 24428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24428, 'data-value': derived.doubled }, children);
}
export default Component24428;

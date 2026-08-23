import React from 'react';
const LABEL_6428 = 'component_6428';
export function Component6428({ value = 6428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6428, 'data-value': derived.doubled }, children);
}
export default Component6428;

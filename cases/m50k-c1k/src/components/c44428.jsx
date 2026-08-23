import React from 'react';
const LABEL_44428 = 'component_44428';
export function Component44428({ value = 44428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44428, 'data-value': derived.doubled }, children);
}
export default Component44428;

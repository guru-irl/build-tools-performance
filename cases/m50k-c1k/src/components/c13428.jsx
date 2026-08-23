import React from 'react';
const LABEL_13428 = 'component_13428';
export function Component13428({ value = 13428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13428, 'data-value': derived.doubled }, children);
}
export default Component13428;

import React from 'react';
const LABEL_46428 = 'component_46428';
export function Component46428({ value = 46428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46428, 'data-value': derived.doubled }, children);
}
export default Component46428;

import React from 'react';
const LABEL_29428 = 'component_29428';
export function Component29428({ value = 29428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29428, 'data-value': derived.doubled }, children);
}
export default Component29428;

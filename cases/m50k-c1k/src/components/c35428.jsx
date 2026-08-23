import React from 'react';
const LABEL_35428 = 'component_35428';
export function Component35428({ value = 35428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35428, 'data-value': derived.doubled }, children);
}
export default Component35428;

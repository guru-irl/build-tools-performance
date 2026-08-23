import React from 'react';
const LABEL_20428 = 'component_20428';
export function Component20428({ value = 20428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20428, 'data-value': derived.doubled }, children);
}
export default Component20428;

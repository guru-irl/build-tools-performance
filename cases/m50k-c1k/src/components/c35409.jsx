import React from 'react';
const LABEL_35409 = 'component_35409';
export function Component35409({ value = 35409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35409, 'data-value': derived.doubled }, children);
}
export default Component35409;

import React from 'react';
const LABEL_37056 = 'component_37056';
export function Component37056({ value = 37056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37056, 'data-value': derived.doubled }, children);
}
export default Component37056;

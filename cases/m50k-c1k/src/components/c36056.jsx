import React from 'react';
const LABEL_36056 = 'component_36056';
export function Component36056({ value = 36056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36056, 'data-value': derived.doubled }, children);
}
export default Component36056;

import React from 'react';
const LABEL_11876 = 'component_11876';
export function Component11876({ value = 11876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11876, 'data-value': derived.doubled }, children);
}
export default Component11876;

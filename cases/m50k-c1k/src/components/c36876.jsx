import React from 'react';
const LABEL_36876 = 'component_36876';
export function Component36876({ value = 36876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36876, 'data-value': derived.doubled }, children);
}
export default Component36876;

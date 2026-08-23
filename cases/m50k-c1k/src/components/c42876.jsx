import React from 'react';
const LABEL_42876 = 'component_42876';
export function Component42876({ value = 42876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42876, 'data-value': derived.doubled }, children);
}
export default Component42876;

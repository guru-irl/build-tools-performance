import React from 'react';
const LABEL_8876 = 'component_8876';
export function Component8876({ value = 8876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8876, 'data-value': derived.doubled }, children);
}
export default Component8876;

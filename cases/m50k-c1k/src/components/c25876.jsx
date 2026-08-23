import React from 'react';
const LABEL_25876 = 'component_25876';
export function Component25876({ value = 25876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25876, 'data-value': derived.doubled }, children);
}
export default Component25876;

import React from 'react';
const LABEL_4876 = 'component_4876';
export function Component4876({ value = 4876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4876, 'data-value': derived.doubled }, children);
}
export default Component4876;

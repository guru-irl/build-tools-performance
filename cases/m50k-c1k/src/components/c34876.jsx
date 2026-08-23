import React from 'react';
const LABEL_34876 = 'component_34876';
export function Component34876({ value = 34876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34876, 'data-value': derived.doubled }, children);
}
export default Component34876;

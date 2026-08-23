import React from 'react';
const LABEL_19876 = 'component_19876';
export function Component19876({ value = 19876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19876, 'data-value': derived.doubled }, children);
}
export default Component19876;

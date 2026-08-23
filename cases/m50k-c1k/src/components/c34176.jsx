import React from 'react';
const LABEL_34176 = 'component_34176';
export function Component34176({ value = 34176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34176, 'data-value': derived.doubled }, children);
}
export default Component34176;

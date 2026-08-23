import React from 'react';
const LABEL_45311 = 'component_45311';
export function Component45311({ value = 45311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45311, 'data-value': derived.doubled }, children);
}
export default Component45311;

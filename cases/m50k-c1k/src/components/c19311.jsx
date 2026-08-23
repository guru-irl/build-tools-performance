import React from 'react';
const LABEL_19311 = 'component_19311';
export function Component19311({ value = 19311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19311, 'data-value': derived.doubled }, children);
}
export default Component19311;

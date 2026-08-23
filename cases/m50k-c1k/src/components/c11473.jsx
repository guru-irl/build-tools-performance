import React from 'react';
const LABEL_11473 = 'component_11473';
export function Component11473({ value = 11473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11473, 'data-value': derived.doubled }, children);
}
export default Component11473;

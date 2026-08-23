import React from 'react';
const LABEL_26473 = 'component_26473';
export function Component26473({ value = 26473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26473, 'data-value': derived.doubled }, children);
}
export default Component26473;

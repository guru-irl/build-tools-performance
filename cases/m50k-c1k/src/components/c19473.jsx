import React from 'react';
const LABEL_19473 = 'component_19473';
export function Component19473({ value = 19473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19473, 'data-value': derived.doubled }, children);
}
export default Component19473;

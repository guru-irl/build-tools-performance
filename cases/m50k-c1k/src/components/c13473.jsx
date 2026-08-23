import React from 'react';
const LABEL_13473 = 'component_13473';
export function Component13473({ value = 13473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13473, 'data-value': derived.doubled }, children);
}
export default Component13473;

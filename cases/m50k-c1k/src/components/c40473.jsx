import React from 'react';
const LABEL_40473 = 'component_40473';
export function Component40473({ value = 40473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40473, 'data-value': derived.doubled }, children);
}
export default Component40473;

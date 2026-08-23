import React from 'react';
const LABEL_40324 = 'component_40324';
export function Component40324({ value = 40324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40324, 'data-value': derived.doubled }, children);
}
export default Component40324;

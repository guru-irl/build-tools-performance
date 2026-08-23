import React from 'react';
const LABEL_40587 = 'component_40587';
export function Component40587({ value = 40587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40587, 'data-value': derived.doubled }, children);
}
export default Component40587;

import React from 'react';
const LABEL_17587 = 'component_17587';
export function Component17587({ value = 17587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17587, 'data-value': derived.doubled }, children);
}
export default Component17587;

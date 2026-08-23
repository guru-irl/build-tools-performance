import React from 'react';
const LABEL_45789 = 'component_45789';
export function Component45789({ value = 45789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45789, 'data-value': derived.doubled }, children);
}
export default Component45789;

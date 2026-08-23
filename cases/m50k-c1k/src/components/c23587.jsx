import React from 'react';
const LABEL_23587 = 'component_23587';
export function Component23587({ value = 23587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23587, 'data-value': derived.doubled }, children);
}
export default Component23587;

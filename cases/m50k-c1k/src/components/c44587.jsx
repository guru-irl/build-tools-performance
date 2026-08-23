import React from 'react';
const LABEL_44587 = 'component_44587';
export function Component44587({ value = 44587, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44587, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44587, 'data-value': derived.doubled }, children);
}
export default Component44587;

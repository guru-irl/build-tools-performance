import React from 'react';
const LABEL_41709 = 'component_41709';
export function Component41709({ value = 41709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41709, 'data-value': derived.doubled }, children);
}
export default Component41709;

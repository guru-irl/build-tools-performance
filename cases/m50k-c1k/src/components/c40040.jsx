import React from 'react';
const LABEL_40040 = 'component_40040';
export function Component40040({ value = 40040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40040, 'data-value': derived.doubled }, children);
}
export default Component40040;

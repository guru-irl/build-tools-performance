import React from 'react';
const LABEL_3281 = 'component_3281';
export function Component3281({ value = 3281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3281, 'data-value': derived.doubled }, children);
}
export default Component3281;

import React from 'react';
const LABEL_3954 = 'component_3954';
export function Component3954({ value = 3954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3954, 'data-value': derived.doubled }, children);
}
export default Component3954;

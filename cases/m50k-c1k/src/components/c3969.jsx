import React from 'react';
const LABEL_3969 = 'component_3969';
export function Component3969({ value = 3969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3969, 'data-value': derived.doubled }, children);
}
export default Component3969;

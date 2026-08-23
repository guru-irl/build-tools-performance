import React from 'react';
const LABEL_3582 = 'component_3582';
export function Component3582({ value = 3582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3582, 'data-value': derived.doubled }, children);
}
export default Component3582;

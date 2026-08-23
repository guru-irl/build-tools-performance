import React from 'react';
const LABEL_3704 = 'component_3704';
export function Component3704({ value = 3704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3704, 'data-value': derived.doubled }, children);
}
export default Component3704;

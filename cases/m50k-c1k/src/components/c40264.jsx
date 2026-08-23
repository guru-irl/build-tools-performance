import React from 'react';
const LABEL_40264 = 'component_40264';
export function Component40264({ value = 40264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40264, 'data-value': derived.doubled }, children);
}
export default Component40264;

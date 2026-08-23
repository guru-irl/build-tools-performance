import React from 'react';
const LABEL_40018 = 'component_40018';
export function Component40018({ value = 40018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40018, 'data-value': derived.doubled }, children);
}
export default Component40018;

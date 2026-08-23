import React from 'react';
const LABEL_40182 = 'component_40182';
export function Component40182({ value = 40182, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40182, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40182, 'data-value': derived.doubled }, children);
}
export default Component40182;

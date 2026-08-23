import React from 'react';
const LABEL_40714 = 'component_40714';
export function Component40714({ value = 40714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40714, 'data-value': derived.doubled }, children);
}
export default Component40714;

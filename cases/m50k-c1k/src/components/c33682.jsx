import React from 'react';
const LABEL_33682 = 'component_33682';
export function Component33682({ value = 33682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33682, 'data-value': derived.doubled }, children);
}
export default Component33682;

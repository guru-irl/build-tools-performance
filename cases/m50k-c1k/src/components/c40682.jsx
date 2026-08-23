import React from 'react';
const LABEL_40682 = 'component_40682';
export function Component40682({ value = 40682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40682, 'data-value': derived.doubled }, children);
}
export default Component40682;

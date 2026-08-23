import React from 'react';
const LABEL_6682 = 'component_6682';
export function Component6682({ value = 6682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6682, 'data-value': derived.doubled }, children);
}
export default Component6682;

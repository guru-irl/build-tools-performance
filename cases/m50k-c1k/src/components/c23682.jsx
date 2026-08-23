import React from 'react';
const LABEL_23682 = 'component_23682';
export function Component23682({ value = 23682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23682, 'data-value': derived.doubled }, children);
}
export default Component23682;

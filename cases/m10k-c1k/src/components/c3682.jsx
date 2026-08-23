import React from 'react';
const LABEL_3682 = 'component_3682';
export function Component3682({ value = 3682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3682, 'data-value': derived.doubled }, children);
}
export default Component3682;

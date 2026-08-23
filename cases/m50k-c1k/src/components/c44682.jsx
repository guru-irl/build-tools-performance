import React from 'react';
const LABEL_44682 = 'component_44682';
export function Component44682({ value = 44682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44682, 'data-value': derived.doubled }, children);
}
export default Component44682;

import React from 'react';
const LABEL_8682 = 'component_8682';
export function Component8682({ value = 8682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8682, 'data-value': derived.doubled }, children);
}
export default Component8682;

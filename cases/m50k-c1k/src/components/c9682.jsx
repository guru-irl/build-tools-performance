import React from 'react';
const LABEL_9682 = 'component_9682';
export function Component9682({ value = 9682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9682, 'data-value': derived.doubled }, children);
}
export default Component9682;

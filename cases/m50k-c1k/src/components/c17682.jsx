import React from 'react';
const LABEL_17682 = 'component_17682';
export function Component17682({ value = 17682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17682, 'data-value': derived.doubled }, children);
}
export default Component17682;

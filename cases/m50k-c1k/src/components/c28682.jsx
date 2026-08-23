import React from 'react';
const LABEL_28682 = 'component_28682';
export function Component28682({ value = 28682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28682, 'data-value': derived.doubled }, children);
}
export default Component28682;

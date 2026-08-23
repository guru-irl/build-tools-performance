import React from 'react';
const LABEL_36682 = 'component_36682';
export function Component36682({ value = 36682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36682, 'data-value': derived.doubled }, children);
}
export default Component36682;

import React from 'react';
const LABEL_34682 = 'component_34682';
export function Component34682({ value = 34682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34682, 'data-value': derived.doubled }, children);
}
export default Component34682;

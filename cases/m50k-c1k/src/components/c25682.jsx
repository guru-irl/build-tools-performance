import React from 'react';
const LABEL_25682 = 'component_25682';
export function Component25682({ value = 25682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25682, 'data-value': derived.doubled }, children);
}
export default Component25682;

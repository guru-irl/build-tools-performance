import React from 'react';
const LABEL_40849 = 'component_40849';
export function Component40849({ value = 40849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40849, 'data-value': derived.doubled }, children);
}
export default Component40849;

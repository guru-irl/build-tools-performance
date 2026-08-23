import React from 'react';
const LABEL_37780 = 'component_37780';
export function Component37780({ value = 37780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37780, 'data-value': derived.doubled }, children);
}
export default Component37780;

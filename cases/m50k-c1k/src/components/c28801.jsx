import React from 'react';
const LABEL_28801 = 'component_28801';
export function Component28801({ value = 28801, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28801, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28801, 'data-value': derived.doubled }, children);
}
export default Component28801;

import React from 'react';
const LABEL_19813 = 'component_19813';
export function Component19813({ value = 19813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19813, 'data-value': derived.doubled }, children);
}
export default Component19813;

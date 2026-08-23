import React from 'react';
const LABEL_15043 = 'component_15043';
export function Component15043({ value = 15043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15043, 'data-value': derived.doubled }, children);
}
export default Component15043;

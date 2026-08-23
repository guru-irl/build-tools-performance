import React from 'react';
const LABEL_37043 = 'component_37043';
export function Component37043({ value = 37043, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37043, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37043, 'data-value': derived.doubled }, children);
}
export default Component37043;

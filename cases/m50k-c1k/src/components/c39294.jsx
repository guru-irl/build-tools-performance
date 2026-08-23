import React from 'react';
const LABEL_39294 = 'component_39294';
export function Component39294({ value = 39294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39294, 'data-value': derived.doubled }, children);
}
export default Component39294;

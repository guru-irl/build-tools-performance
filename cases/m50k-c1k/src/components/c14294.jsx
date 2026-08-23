import React from 'react';
const LABEL_14294 = 'component_14294';
export function Component14294({ value = 14294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14294, 'data-value': derived.doubled }, children);
}
export default Component14294;

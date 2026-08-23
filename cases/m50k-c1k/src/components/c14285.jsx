import React from 'react';
const LABEL_14285 = 'component_14285';
export function Component14285({ value = 14285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14285, 'data-value': derived.doubled }, children);
}
export default Component14285;

import React from 'react';
const LABEL_14732 = 'component_14732';
export function Component14732({ value = 14732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14732, 'data-value': derived.doubled }, children);
}
export default Component14732;

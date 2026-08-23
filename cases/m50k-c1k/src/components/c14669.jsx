import React from 'react';
const LABEL_14669 = 'component_14669';
export function Component14669({ value = 14669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14669, 'data-value': derived.doubled }, children);
}
export default Component14669;

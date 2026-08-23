import React from 'react';
const LABEL_3193 = 'component_3193';
export function Component3193({ value = 3193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3193, 'data-value': derived.doubled }, children);
}
export default Component3193;

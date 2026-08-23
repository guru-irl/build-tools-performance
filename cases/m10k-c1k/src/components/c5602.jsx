import React from 'react';
const LABEL_5602 = 'component_5602';
export function Component5602({ value = 5602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5602, 'data-value': derived.doubled }, children);
}
export default Component5602;

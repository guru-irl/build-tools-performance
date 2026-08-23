import React from 'react';
const LABEL_38602 = 'component_38602';
export function Component38602({ value = 38602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38602, 'data-value': derived.doubled }, children);
}
export default Component38602;

import React from 'react';
const LABEL_7602 = 'component_7602';
export function Component7602({ value = 7602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7602, 'data-value': derived.doubled }, children);
}
export default Component7602;

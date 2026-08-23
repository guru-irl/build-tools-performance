import React from 'react';
const LABEL_14602 = 'component_14602';
export function Component14602({ value = 14602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14602, 'data-value': derived.doubled }, children);
}
export default Component14602;

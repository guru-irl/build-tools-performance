import React from 'react';
const LABEL_26602 = 'component_26602';
export function Component26602({ value = 26602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26602, 'data-value': derived.doubled }, children);
}
export default Component26602;

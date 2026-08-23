import React from 'react';
const LABEL_19602 = 'component_19602';
export function Component19602({ value = 19602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19602, 'data-value': derived.doubled }, children);
}
export default Component19602;

import React from 'react';
const LABEL_8602 = 'component_8602';
export function Component8602({ value = 8602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8602, 'data-value': derived.doubled }, children);
}
export default Component8602;

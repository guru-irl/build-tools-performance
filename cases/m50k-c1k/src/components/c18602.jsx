import React from 'react';
const LABEL_18602 = 'component_18602';
export function Component18602({ value = 18602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18602, 'data-value': derived.doubled }, children);
}
export default Component18602;

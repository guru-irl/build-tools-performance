import React from 'react';
const LABEL_38917 = 'component_38917';
export function Component38917({ value = 38917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38917, 'data-value': derived.doubled }, children);
}
export default Component38917;

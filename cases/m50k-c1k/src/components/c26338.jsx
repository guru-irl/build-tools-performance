import React from 'react';
const LABEL_26338 = 'component_26338';
export function Component26338({ value = 26338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26338, 'data-value': derived.doubled }, children);
}
export default Component26338;

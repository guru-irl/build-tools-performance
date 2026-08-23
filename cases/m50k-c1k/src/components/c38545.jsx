import React from 'react';
const LABEL_38545 = 'component_38545';
export function Component38545({ value = 38545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38545, 'data-value': derived.doubled }, children);
}
export default Component38545;

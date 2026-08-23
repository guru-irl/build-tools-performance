import React from 'react';
const LABEL_18106 = 'component_18106';
export function Component18106({ value = 18106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18106, 'data-value': derived.doubled }, children);
}
export default Component18106;

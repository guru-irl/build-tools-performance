import React from 'react';
const LABEL_18545 = 'component_18545';
export function Component18545({ value = 18545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18545, 'data-value': derived.doubled }, children);
}
export default Component18545;

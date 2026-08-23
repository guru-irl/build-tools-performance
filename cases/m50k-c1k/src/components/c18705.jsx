import React from 'react';
const LABEL_18705 = 'component_18705';
export function Component18705({ value = 18705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18705, 'data-value': derived.doubled }, children);
}
export default Component18705;

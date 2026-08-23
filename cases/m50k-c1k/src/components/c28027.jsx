import React from 'react';
const LABEL_28027 = 'component_28027';
export function Component28027({ value = 28027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28027, 'data-value': derived.doubled }, children);
}
export default Component28027;

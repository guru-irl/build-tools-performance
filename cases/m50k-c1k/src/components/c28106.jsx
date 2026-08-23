import React from 'react';
const LABEL_28106 = 'component_28106';
export function Component28106({ value = 28106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28106, 'data-value': derived.doubled }, children);
}
export default Component28106;

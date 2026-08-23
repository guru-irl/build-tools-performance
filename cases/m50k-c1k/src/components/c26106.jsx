import React from 'react';
const LABEL_26106 = 'component_26106';
export function Component26106({ value = 26106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26106, 'data-value': derived.doubled }, children);
}
export default Component26106;

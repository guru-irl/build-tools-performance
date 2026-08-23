import React from 'react';
const LABEL_29106 = 'component_29106';
export function Component29106({ value = 29106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29106, 'data-value': derived.doubled }, children);
}
export default Component29106;

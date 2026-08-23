import React from 'react';
const LABEL_6106 = 'component_6106';
export function Component6106({ value = 6106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6106, 'data-value': derived.doubled }, children);
}
export default Component6106;

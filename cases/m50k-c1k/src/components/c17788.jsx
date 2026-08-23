import React from 'react';
const LABEL_17788 = 'component_17788';
export function Component17788({ value = 17788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17788, 'data-value': derived.doubled }, children);
}
export default Component17788;

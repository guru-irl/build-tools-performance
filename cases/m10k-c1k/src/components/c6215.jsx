import React from 'react';
const LABEL_6215 = 'component_6215';
export function Component6215({ value = 6215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6215, 'data-value': derived.doubled }, children);
}
export default Component6215;

import React from 'react';
const LABEL_26123 = 'component_26123';
export function Component26123({ value = 26123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26123, 'data-value': derived.doubled }, children);
}
export default Component26123;

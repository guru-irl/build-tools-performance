import React from 'react';
const LABEL_13168 = 'component_13168';
export function Component13168({ value = 13168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13168, 'data-value': derived.doubled }, children);
}
export default Component13168;

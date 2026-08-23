import React from 'react';
const LABEL_26168 = 'component_26168';
export function Component26168({ value = 26168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26168, 'data-value': derived.doubled }, children);
}
export default Component26168;

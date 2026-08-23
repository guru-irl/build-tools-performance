import React from 'react';
const LABEL_34168 = 'component_34168';
export function Component34168({ value = 34168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34168, 'data-value': derived.doubled }, children);
}
export default Component34168;

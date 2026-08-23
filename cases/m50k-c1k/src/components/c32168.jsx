import React from 'react';
const LABEL_32168 = 'component_32168';
export function Component32168({ value = 32168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32168, 'data-value': derived.doubled }, children);
}
export default Component32168;

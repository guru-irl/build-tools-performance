import React from 'react';
const LABEL_24168 = 'component_24168';
export function Component24168({ value = 24168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24168, 'data-value': derived.doubled }, children);
}
export default Component24168;

import React from 'react';
const LABEL_20168 = 'component_20168';
export function Component20168({ value = 20168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20168, 'data-value': derived.doubled }, children);
}
export default Component20168;

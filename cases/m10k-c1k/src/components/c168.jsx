import React from 'react';
const LABEL_168 = 'component_168';
export function Component168({ value = 168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_168, 'data-value': derived.doubled }, children);
}
export default Component168;

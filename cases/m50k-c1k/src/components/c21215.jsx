import React from 'react';
const LABEL_21215 = 'component_21215';
export function Component21215({ value = 21215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21215, 'data-value': derived.doubled }, children);
}
export default Component21215;

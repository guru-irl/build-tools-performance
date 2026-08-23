import React from 'react';
const LABEL_38340 = 'component_38340';
export function Component38340({ value = 38340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38340, 'data-value': derived.doubled }, children);
}
export default Component38340;

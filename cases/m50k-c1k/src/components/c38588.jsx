import React from 'react';
const LABEL_38588 = 'component_38588';
export function Component38588({ value = 38588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38588, 'data-value': derived.doubled }, children);
}
export default Component38588;

import React from 'react';
const LABEL_38546 = 'component_38546';
export function Component38546({ value = 38546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38546, 'data-value': derived.doubled }, children);
}
export default Component38546;

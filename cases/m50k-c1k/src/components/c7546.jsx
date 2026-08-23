import React from 'react';
const LABEL_7546 = 'component_7546';
export function Component7546({ value = 7546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7546, 'data-value': derived.doubled }, children);
}
export default Component7546;

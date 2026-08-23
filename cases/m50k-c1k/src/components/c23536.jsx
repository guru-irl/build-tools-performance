import React from 'react';
const LABEL_23536 = 'component_23536';
export function Component23536({ value = 23536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23536, 'data-value': derived.doubled }, children);
}
export default Component23536;

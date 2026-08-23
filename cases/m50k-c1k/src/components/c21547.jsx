import React from 'react';
const LABEL_21547 = 'component_21547';
export function Component21547({ value = 21547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21547, 'data-value': derived.doubled }, children);
}
export default Component21547;

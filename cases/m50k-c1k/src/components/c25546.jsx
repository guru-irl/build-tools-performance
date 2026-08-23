import React from 'react';
const LABEL_25546 = 'component_25546';
export function Component25546({ value = 25546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25546, 'data-value': derived.doubled }, children);
}
export default Component25546;

import React from 'react';
const LABEL_25826 = 'component_25826';
export function Component25826({ value = 25826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25826, 'data-value': derived.doubled }, children);
}
export default Component25826;

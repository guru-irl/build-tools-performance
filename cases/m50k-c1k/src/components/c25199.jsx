import React from 'react';
const LABEL_25199 = 'component_25199';
export function Component25199({ value = 25199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25199, 'data-value': derived.doubled }, children);
}
export default Component25199;

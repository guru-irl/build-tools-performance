import React from 'react';
const LABEL_25171 = 'component_25171';
export function Component25171({ value = 25171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25171, 'data-value': derived.doubled }, children);
}
export default Component25171;

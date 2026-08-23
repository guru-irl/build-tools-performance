import React from 'react';
const LABEL_34079 = 'component_34079';
export function Component34079({ value = 34079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34079, 'data-value': derived.doubled }, children);
}
export default Component34079;

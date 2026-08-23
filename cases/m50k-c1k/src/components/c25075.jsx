import React from 'react';
const LABEL_25075 = 'component_25075';
export function Component25075({ value = 25075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25075, 'data-value': derived.doubled }, children);
}
export default Component25075;

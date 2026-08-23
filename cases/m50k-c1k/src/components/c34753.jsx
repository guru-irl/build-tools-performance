import React from 'react';
const LABEL_34753 = 'component_34753';
export function Component34753({ value = 34753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34753, 'data-value': derived.doubled }, children);
}
export default Component34753;

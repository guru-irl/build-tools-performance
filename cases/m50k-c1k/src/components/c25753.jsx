import React from 'react';
const LABEL_25753 = 'component_25753';
export function Component25753({ value = 25753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25753, 'data-value': derived.doubled }, children);
}
export default Component25753;

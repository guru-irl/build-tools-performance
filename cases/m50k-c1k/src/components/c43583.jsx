import React from 'react';
const LABEL_43583 = 'component_43583';
export function Component43583({ value = 43583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43583, 'data-value': derived.doubled }, children);
}
export default Component43583;

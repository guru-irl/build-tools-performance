import React from 'react';
const LABEL_4168 = 'component_4168';
export function Component4168({ value = 4168, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4168, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4168, 'data-value': derived.doubled }, children);
}
export default Component4168;

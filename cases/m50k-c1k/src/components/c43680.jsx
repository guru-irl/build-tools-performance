import React from 'react';
const LABEL_43680 = 'component_43680';
export function Component43680({ value = 43680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43680, 'data-value': derived.doubled }, children);
}
export default Component43680;

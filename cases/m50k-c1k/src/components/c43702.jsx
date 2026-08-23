import React from 'react';
const LABEL_43702 = 'component_43702';
export function Component43702({ value = 43702, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43702, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43702, 'data-value': derived.doubled }, children);
}
export default Component43702;

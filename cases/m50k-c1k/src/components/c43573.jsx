import React from 'react';
const LABEL_43573 = 'component_43573';
export function Component43573({ value = 43573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43573, 'data-value': derived.doubled }, children);
}
export default Component43573;

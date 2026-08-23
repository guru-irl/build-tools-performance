import React from 'react';
const LABEL_43813 = 'component_43813';
export function Component43813({ value = 43813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43813, 'data-value': derived.doubled }, children);
}
export default Component43813;

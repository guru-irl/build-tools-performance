import React from 'react';
const LABEL_43750 = 'component_43750';
export function Component43750({ value = 43750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43750, 'data-value': derived.doubled }, children);
}
export default Component43750;

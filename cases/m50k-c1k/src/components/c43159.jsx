import React from 'react';
const LABEL_43159 = 'component_43159';
export function Component43159({ value = 43159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43159, 'data-value': derived.doubled }, children);
}
export default Component43159;

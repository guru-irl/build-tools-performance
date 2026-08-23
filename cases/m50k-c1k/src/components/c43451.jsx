import React from 'react';
const LABEL_43451 = 'component_43451';
export function Component43451({ value = 43451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43451, 'data-value': derived.doubled }, children);
}
export default Component43451;

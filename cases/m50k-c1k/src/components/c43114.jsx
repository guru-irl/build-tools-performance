import React from 'react';
const LABEL_43114 = 'component_43114';
export function Component43114({ value = 43114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43114, 'data-value': derived.doubled }, children);
}
export default Component43114;

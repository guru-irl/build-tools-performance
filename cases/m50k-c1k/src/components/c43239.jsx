import React from 'react';
const LABEL_43239 = 'component_43239';
export function Component43239({ value = 43239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43239, 'data-value': derived.doubled }, children);
}
export default Component43239;

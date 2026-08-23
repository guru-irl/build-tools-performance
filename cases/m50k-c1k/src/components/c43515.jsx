import React from 'react';
const LABEL_43515 = 'component_43515';
export function Component43515({ value = 43515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43515, 'data-value': derived.doubled }, children);
}
export default Component43515;

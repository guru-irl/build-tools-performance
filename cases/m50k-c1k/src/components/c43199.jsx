import React from 'react';
const LABEL_43199 = 'component_43199';
export function Component43199({ value = 43199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43199, 'data-value': derived.doubled }, children);
}
export default Component43199;

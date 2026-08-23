import React from 'react';
const LABEL_43674 = 'component_43674';
export function Component43674({ value = 43674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43674, 'data-value': derived.doubled }, children);
}
export default Component43674;

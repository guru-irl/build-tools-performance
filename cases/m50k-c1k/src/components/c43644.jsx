import React from 'react';
const LABEL_43644 = 'component_43644';
export function Component43644({ value = 43644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43644, 'data-value': derived.doubled }, children);
}
export default Component43644;

import React from 'react';
const LABEL_43743 = 'component_43743';
export function Component43743({ value = 43743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43743, 'data-value': derived.doubled }, children);
}
export default Component43743;

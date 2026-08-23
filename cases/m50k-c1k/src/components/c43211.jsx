import React from 'react';
const LABEL_43211 = 'component_43211';
export function Component43211({ value = 43211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43211, 'data-value': derived.doubled }, children);
}
export default Component43211;

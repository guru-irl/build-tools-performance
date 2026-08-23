import React from 'react';
const LABEL_43602 = 'component_43602';
export function Component43602({ value = 43602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43602, 'data-value': derived.doubled }, children);
}
export default Component43602;

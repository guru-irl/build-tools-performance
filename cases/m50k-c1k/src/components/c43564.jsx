import React from 'react';
const LABEL_43564 = 'component_43564';
export function Component43564({ value = 43564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43564, 'data-value': derived.doubled }, children);
}
export default Component43564;

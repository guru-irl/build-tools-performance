import React from 'react';
const LABEL_43172 = 'component_43172';
export function Component43172({ value = 43172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43172, 'data-value': derived.doubled }, children);
}
export default Component43172;

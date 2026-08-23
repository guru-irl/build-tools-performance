import React from 'react';
const LABEL_43880 = 'component_43880';
export function Component43880({ value = 43880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43880, 'data-value': derived.doubled }, children);
}
export default Component43880;

import React from 'react';
const LABEL_43077 = 'component_43077';
export function Component43077({ value = 43077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43077, 'data-value': derived.doubled }, children);
}
export default Component43077;

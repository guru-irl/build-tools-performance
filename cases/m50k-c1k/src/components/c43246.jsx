import React from 'react';
const LABEL_43246 = 'component_43246';
export function Component43246({ value = 43246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43246, 'data-value': derived.doubled }, children);
}
export default Component43246;

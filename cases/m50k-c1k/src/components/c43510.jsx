import React from 'react';
const LABEL_43510 = 'component_43510';
export function Component43510({ value = 43510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43510, 'data-value': derived.doubled }, children);
}
export default Component43510;

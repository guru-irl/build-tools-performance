import React from 'react';
const LABEL_43608 = 'component_43608';
export function Component43608({ value = 43608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43608, 'data-value': derived.doubled }, children);
}
export default Component43608;

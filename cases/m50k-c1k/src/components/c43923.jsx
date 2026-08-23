import React from 'react';
const LABEL_43923 = 'component_43923';
export function Component43923({ value = 43923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43923, 'data-value': derived.doubled }, children);
}
export default Component43923;

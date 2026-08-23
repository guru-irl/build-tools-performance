import React from 'react';
const LABEL_43222 = 'component_43222';
export function Component43222({ value = 43222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43222, 'data-value': derived.doubled }, children);
}
export default Component43222;

import React from 'react';
const LABEL_43054 = 'component_43054';
export function Component43054({ value = 43054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43054, 'data-value': derived.doubled }, children);
}
export default Component43054;

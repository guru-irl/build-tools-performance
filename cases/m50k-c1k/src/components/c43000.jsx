import React from 'react';
const LABEL_43000 = 'component_43000';
export function Component43000({ value = 43000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43000, 'data-value': derived.doubled }, children);
}
export default Component43000;

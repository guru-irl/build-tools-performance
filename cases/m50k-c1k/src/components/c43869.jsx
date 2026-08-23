import React from 'react';
const LABEL_43869 = 'component_43869';
export function Component43869({ value = 43869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43869, 'data-value': derived.doubled }, children);
}
export default Component43869;

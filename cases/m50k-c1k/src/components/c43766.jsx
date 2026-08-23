import React from 'react';
const LABEL_43766 = 'component_43766';
export function Component43766({ value = 43766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43766, 'data-value': derived.doubled }, children);
}
export default Component43766;

import React from 'react';
const LABEL_43212 = 'component_43212';
export function Component43212({ value = 43212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43212, 'data-value': derived.doubled }, children);
}
export default Component43212;

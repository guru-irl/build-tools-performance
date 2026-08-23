import React from 'react';
const LABEL_43173 = 'component_43173';
export function Component43173({ value = 43173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43173, 'data-value': derived.doubled }, children);
}
export default Component43173;

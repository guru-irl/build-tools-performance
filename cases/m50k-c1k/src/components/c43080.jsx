import React from 'react';
const LABEL_43080 = 'component_43080';
export function Component43080({ value = 43080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43080, 'data-value': derived.doubled }, children);
}
export default Component43080;

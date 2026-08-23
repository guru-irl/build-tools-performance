import React from 'react';
const LABEL_43757 = 'component_43757';
export function Component43757({ value = 43757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43757, 'data-value': derived.doubled }, children);
}
export default Component43757;

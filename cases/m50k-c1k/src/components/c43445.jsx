import React from 'react';
const LABEL_43445 = 'component_43445';
export function Component43445({ value = 43445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43445, 'data-value': derived.doubled }, children);
}
export default Component43445;

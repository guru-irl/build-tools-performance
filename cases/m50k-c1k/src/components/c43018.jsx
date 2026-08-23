import React from 'react';
const LABEL_43018 = 'component_43018';
export function Component43018({ value = 43018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43018, 'data-value': derived.doubled }, children);
}
export default Component43018;

import React from 'react';
const LABEL_43063 = 'component_43063';
export function Component43063({ value = 43063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43063, 'data-value': derived.doubled }, children);
}
export default Component43063;

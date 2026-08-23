import React from 'react';
const LABEL_43763 = 'component_43763';
export function Component43763({ value = 43763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43763, 'data-value': derived.doubled }, children);
}
export default Component43763;

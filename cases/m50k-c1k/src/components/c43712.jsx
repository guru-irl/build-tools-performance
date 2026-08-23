import React from 'react';
const LABEL_43712 = 'component_43712';
export function Component43712({ value = 43712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43712, 'data-value': derived.doubled }, children);
}
export default Component43712;

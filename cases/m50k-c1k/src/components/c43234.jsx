import React from 'react';
const LABEL_43234 = 'component_43234';
export function Component43234({ value = 43234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43234, 'data-value': derived.doubled }, children);
}
export default Component43234;

import React from 'react';
const LABEL_43943 = 'component_43943';
export function Component43943({ value = 43943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43943, 'data-value': derived.doubled }, children);
}
export default Component43943;

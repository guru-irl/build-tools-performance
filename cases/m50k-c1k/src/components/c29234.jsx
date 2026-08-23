import React from 'react';
const LABEL_29234 = 'component_29234';
export function Component29234({ value = 29234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29234, 'data-value': derived.doubled }, children);
}
export default Component29234;

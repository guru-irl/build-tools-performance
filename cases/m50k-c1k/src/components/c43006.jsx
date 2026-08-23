import React from 'react';
const LABEL_43006 = 'component_43006';
export function Component43006({ value = 43006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43006, 'data-value': derived.doubled }, children);
}
export default Component43006;

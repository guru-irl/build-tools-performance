import React from 'react';
const LABEL_43340 = 'component_43340';
export function Component43340({ value = 43340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43340, 'data-value': derived.doubled }, children);
}
export default Component43340;

import React from 'react';
const LABEL_43345 = 'component_43345';
export function Component43345({ value = 43345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43345, 'data-value': derived.doubled }, children);
}
export default Component43345;

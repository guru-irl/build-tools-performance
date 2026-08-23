import React from 'react';
const LABEL_43964 = 'component_43964';
export function Component43964({ value = 43964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43964, 'data-value': derived.doubled }, children);
}
export default Component43964;

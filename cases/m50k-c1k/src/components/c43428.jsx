import React from 'react';
const LABEL_43428 = 'component_43428';
export function Component43428({ value = 43428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43428, 'data-value': derived.doubled }, children);
}
export default Component43428;

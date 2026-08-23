import React from 'react';
const LABEL_43879 = 'component_43879';
export function Component43879({ value = 43879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43879, 'data-value': derived.doubled }, children);
}
export default Component43879;

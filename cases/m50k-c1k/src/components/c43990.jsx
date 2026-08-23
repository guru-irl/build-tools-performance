import React from 'react';
const LABEL_43990 = 'component_43990';
export function Component43990({ value = 43990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43990, 'data-value': derived.doubled }, children);
}
export default Component43990;

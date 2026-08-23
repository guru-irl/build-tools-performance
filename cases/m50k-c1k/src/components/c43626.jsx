import React from 'react';
const LABEL_43626 = 'component_43626';
export function Component43626({ value = 43626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43626, 'data-value': derived.doubled }, children);
}
export default Component43626;

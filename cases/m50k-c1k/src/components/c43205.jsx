import React from 'react';
const LABEL_43205 = 'component_43205';
export function Component43205({ value = 43205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43205, 'data-value': derived.doubled }, children);
}
export default Component43205;

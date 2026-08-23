import React from 'react';
const LABEL_43262 = 'component_43262';
export function Component43262({ value = 43262, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43262, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43262, 'data-value': derived.doubled }, children);
}
export default Component43262;

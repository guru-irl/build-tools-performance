import React from 'react';
const LABEL_43322 = 'component_43322';
export function Component43322({ value = 43322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43322, 'data-value': derived.doubled }, children);
}
export default Component43322;

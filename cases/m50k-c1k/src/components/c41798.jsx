import React from 'react';
const LABEL_41798 = 'component_41798';
export function Component41798({ value = 41798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41798, 'data-value': derived.doubled }, children);
}
export default Component41798;

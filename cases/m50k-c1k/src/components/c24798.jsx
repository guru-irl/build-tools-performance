import React from 'react';
const LABEL_24798 = 'component_24798';
export function Component24798({ value = 24798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24798, 'data-value': derived.doubled }, children);
}
export default Component24798;

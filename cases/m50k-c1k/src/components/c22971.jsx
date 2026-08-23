import React from 'react';
const LABEL_22971 = 'component_22971';
export function Component22971({ value = 22971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22971, 'data-value': derived.doubled }, children);
}
export default Component22971;

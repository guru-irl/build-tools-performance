import React from 'react';
const LABEL_34239 = 'component_34239';
export function Component34239({ value = 34239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34239, 'data-value': derived.doubled }, children);
}
export default Component34239;

import React from 'react';
const LABEL_34053 = 'component_34053';
export function Component34053({ value = 34053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34053, 'data-value': derived.doubled }, children);
}
export default Component34053;

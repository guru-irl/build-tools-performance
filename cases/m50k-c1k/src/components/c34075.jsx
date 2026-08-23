import React from 'react';
const LABEL_34075 = 'component_34075';
export function Component34075({ value = 34075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34075, 'data-value': derived.doubled }, children);
}
export default Component34075;

import React from 'react';
const LABEL_34786 = 'component_34786';
export function Component34786({ value = 34786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34786, 'data-value': derived.doubled }, children);
}
export default Component34786;

import React from 'react';
const LABEL_34691 = 'component_34691';
export function Component34691({ value = 34691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34691, 'data-value': derived.doubled }, children);
}
export default Component34691;

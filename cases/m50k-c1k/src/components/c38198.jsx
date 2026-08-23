import React from 'react';
const LABEL_38198 = 'component_38198';
export function Component38198({ value = 38198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38198, 'data-value': derived.doubled }, children);
}
export default Component38198;

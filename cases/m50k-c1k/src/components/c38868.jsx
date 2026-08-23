import React from 'react';
const LABEL_38868 = 'component_38868';
export function Component38868({ value = 38868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38868, 'data-value': derived.doubled }, children);
}
export default Component38868;

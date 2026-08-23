import React from 'react';
const LABEL_40917 = 'component_40917';
export function Component40917({ value = 40917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40917, 'data-value': derived.doubled }, children);
}
export default Component40917;

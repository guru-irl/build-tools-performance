import React from 'react';
const LABEL_42682 = 'component_42682';
export function Component42682({ value = 42682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42682, 'data-value': derived.doubled }, children);
}
export default Component42682;

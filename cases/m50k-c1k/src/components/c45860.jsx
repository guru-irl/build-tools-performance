import React from 'react';
const LABEL_45860 = 'component_45860';
export function Component45860({ value = 45860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45860, 'data-value': derived.doubled }, children);
}
export default Component45860;

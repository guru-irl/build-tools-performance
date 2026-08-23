import React from 'react';
const LABEL_38722 = 'component_38722';
export function Component38722({ value = 38722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38722, 'data-value': derived.doubled }, children);
}
export default Component38722;

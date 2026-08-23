import React from 'react';
const LABEL_25722 = 'component_25722';
export function Component25722({ value = 25722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25722, 'data-value': derived.doubled }, children);
}
export default Component25722;

import React from 'react';
const LABEL_32722 = 'component_32722';
export function Component32722({ value = 32722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32722, 'data-value': derived.doubled }, children);
}
export default Component32722;

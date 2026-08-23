import React from 'react';
const LABEL_33897 = 'component_33897';
export function Component33897({ value = 33897, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33897, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33897, 'data-value': derived.doubled }, children);
}
export default Component33897;

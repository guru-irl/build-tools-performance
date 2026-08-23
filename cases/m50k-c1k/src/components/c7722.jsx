import React from 'react';
const LABEL_7722 = 'component_7722';
export function Component7722({ value = 7722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7722, 'data-value': derived.doubled }, children);
}
export default Component7722;

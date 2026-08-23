import React from 'react';
const LABEL_959 = 'component_959';
export function Component959({ value = 959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_959, 'data-value': derived.doubled }, children);
}
export default Component959;

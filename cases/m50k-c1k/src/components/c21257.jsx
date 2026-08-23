import React from 'react';
const LABEL_21257 = 'component_21257';
export function Component21257({ value = 21257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21257, 'data-value': derived.doubled }, children);
}
export default Component21257;

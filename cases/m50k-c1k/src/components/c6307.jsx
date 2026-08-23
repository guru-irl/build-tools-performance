import React from 'react';
const LABEL_6307 = 'component_6307';
export function Component6307({ value = 6307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6307, 'data-value': derived.doubled }, children);
}
export default Component6307;

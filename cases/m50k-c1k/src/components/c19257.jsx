import React from 'react';
const LABEL_19257 = 'component_19257';
export function Component19257({ value = 19257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19257, 'data-value': derived.doubled }, children);
}
export default Component19257;

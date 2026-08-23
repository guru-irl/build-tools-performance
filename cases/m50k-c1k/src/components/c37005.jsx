import React from 'react';
const LABEL_37005 = 'component_37005';
export function Component37005({ value = 37005, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37005, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37005, 'data-value': derived.doubled }, children);
}
export default Component37005;

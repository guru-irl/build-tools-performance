import React from 'react';
const LABEL_37194 = 'component_37194';
export function Component37194({ value = 37194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37194, 'data-value': derived.doubled }, children);
}
export default Component37194;

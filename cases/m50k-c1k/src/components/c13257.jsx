import React from 'react';
const LABEL_13257 = 'component_13257';
export function Component13257({ value = 13257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13257, 'data-value': derived.doubled }, children);
}
export default Component13257;

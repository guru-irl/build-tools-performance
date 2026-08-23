import React from 'react';
const LABEL_7137 = 'component_7137';
export function Component7137({ value = 7137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7137, 'data-value': derived.doubled }, children);
}
export default Component7137;

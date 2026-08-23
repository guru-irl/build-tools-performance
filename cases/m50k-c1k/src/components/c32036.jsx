import React from 'react';
const LABEL_32036 = 'component_32036';
export function Component32036({ value = 32036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32036, 'data-value': derived.doubled }, children);
}
export default Component32036;

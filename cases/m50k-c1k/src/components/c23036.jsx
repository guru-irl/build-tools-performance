import React from 'react';
const LABEL_23036 = 'component_23036';
export function Component23036({ value = 23036, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23036, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23036, 'data-value': derived.doubled }, children);
}
export default Component23036;

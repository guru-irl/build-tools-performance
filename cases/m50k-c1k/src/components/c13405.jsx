import React from 'react';
const LABEL_13405 = 'component_13405';
export function Component13405({ value = 13405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13405, 'data-value': derived.doubled }, children);
}
export default Component13405;

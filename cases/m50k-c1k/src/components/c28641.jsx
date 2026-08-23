import React from 'react';
const LABEL_28641 = 'component_28641';
export function Component28641({ value = 28641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28641, 'data-value': derived.doubled }, children);
}
export default Component28641;

import React from 'react';
const LABEL_28853 = 'component_28853';
export function Component28853({ value = 28853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28853, 'data-value': derived.doubled }, children);
}
export default Component28853;

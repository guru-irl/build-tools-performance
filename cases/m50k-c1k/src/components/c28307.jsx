import React from 'react';
const LABEL_28307 = 'component_28307';
export function Component28307({ value = 28307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28307, 'data-value': derived.doubled }, children);
}
export default Component28307;

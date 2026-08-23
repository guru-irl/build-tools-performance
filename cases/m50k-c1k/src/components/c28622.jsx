import React from 'react';
const LABEL_28622 = 'component_28622';
export function Component28622({ value = 28622, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28622, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28622, 'data-value': derived.doubled }, children);
}
export default Component28622;

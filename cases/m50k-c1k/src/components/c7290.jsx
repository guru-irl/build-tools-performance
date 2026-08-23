import React from 'react';
const LABEL_7290 = 'component_7290';
export function Component7290({ value = 7290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7290, 'data-value': derived.doubled }, children);
}
export default Component7290;

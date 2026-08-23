import React from 'react';
const LABEL_7057 = 'component_7057';
export function Component7057({ value = 7057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7057, 'data-value': derived.doubled }, children);
}
export default Component7057;

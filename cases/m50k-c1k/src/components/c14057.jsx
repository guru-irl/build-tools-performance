import React from 'react';
const LABEL_14057 = 'component_14057';
export function Component14057({ value = 14057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14057, 'data-value': derived.doubled }, children);
}
export default Component14057;

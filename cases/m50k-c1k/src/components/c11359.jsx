import React from 'react';
const LABEL_11359 = 'component_11359';
export function Component11359({ value = 11359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11359, 'data-value': derived.doubled }, children);
}
export default Component11359;

import React from 'react';
const LABEL_3013 = 'component_3013';
export function Component3013({ value = 3013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3013, 'data-value': derived.doubled }, children);
}
export default Component3013;

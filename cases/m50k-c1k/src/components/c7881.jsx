import React from 'react';
const LABEL_7881 = 'component_7881';
export function Component7881({ value = 7881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7881, 'data-value': derived.doubled }, children);
}
export default Component7881;

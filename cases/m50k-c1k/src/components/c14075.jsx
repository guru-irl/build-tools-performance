import React from 'react';
const LABEL_14075 = 'component_14075';
export function Component14075({ value = 14075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14075, 'data-value': derived.doubled }, children);
}
export default Component14075;

import React from 'react';
const LABEL_3456 = 'component_3456';
export function Component3456({ value = 3456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3456, 'data-value': derived.doubled }, children);
}
export default Component3456;

import React from 'react';
const LABEL_3546 = 'component_3546';
export function Component3546({ value = 3546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3546, 'data-value': derived.doubled }, children);
}
export default Component3546;

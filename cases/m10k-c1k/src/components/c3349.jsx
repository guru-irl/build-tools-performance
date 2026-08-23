import React from 'react';
const LABEL_3349 = 'component_3349';
export function Component3349({ value = 3349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3349, 'data-value': derived.doubled }, children);
}
export default Component3349;

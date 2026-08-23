import React from 'react';
const LABEL_34659 = 'component_34659';
export function Component34659({ value = 34659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34659, 'data-value': derived.doubled }, children);
}
export default Component34659;

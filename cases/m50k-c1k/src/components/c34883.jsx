import React from 'react';
const LABEL_34883 = 'component_34883';
export function Component34883({ value = 34883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34883, 'data-value': derived.doubled }, children);
}
export default Component34883;

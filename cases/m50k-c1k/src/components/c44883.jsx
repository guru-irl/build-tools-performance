import React from 'react';
const LABEL_44883 = 'component_44883';
export function Component44883({ value = 44883, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44883, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44883, 'data-value': derived.doubled }, children);
}
export default Component44883;
